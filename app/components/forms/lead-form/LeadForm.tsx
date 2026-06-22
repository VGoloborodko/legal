import { useState } from 'react';
import styles from './LeadForm.module.scss';
import Button from '../../ui/button/Button';

import { DEFAULT_SUBMIT_LABEL, ERROR_MESSAGE, INITIAL_FORM_VALUES, SUCCESS_MESSAGE_TITLE, SUCCESS_MESSAGE_DESC } from './lead-form.constants';
import { buildLeadFormPayload } from './lead-form.helpers';
import { submitLeadForm } from './lead-form.service';
import type { LeadFormErrors, LeadFormProps, LeadFormState, LeadFormValues } from './lead-form.types';
import { hasLeadFormErrors, validateLeadForm } from './lead-form.validation';

export default function LeadForm({ service, formId, blockId, title, description, submitLabel = DEFAULT_SUBMIT_LABEL, showEmail = false, showComment = false, className }: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [state, setState] = useState<LeadFormState>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const isSubmitting = state === 'submitting';
  const isSuccess = state === 'success';
  const formClassName = [styles.form, className].filter(Boolean).join(' ');

  function formatPhoneInput(value: string): string {
    const digits = value.replace(/\D/g, '');

    if (!digits) return '';

    let normalized = digits;

    if (normalized.startsWith('8')) {
      normalized = `7${normalized.slice(1)}`;
    } else if (!normalized.startsWith('7')) {
      normalized = `7${normalized}`;
    }

    normalized = normalized.slice(0, 11);

    const country = normalized[0];
    const part1 = normalized.slice(1, 4);
    const part2 = normalized.slice(4, 7);
    const part3 = normalized.slice(7, 9);
    const part4 = normalized.slice(9, 11);

    let result = `+${country}`;

    if (part1) result += ` (${part1}`;
    if (part1.length === 3) result += ')';
    if (part2) result += ` ${part2}`;
    if (part3) result += `-${part3}`;
    if (part4) result += `-${part4}`;

    return result;
  }

  function handleChange<K extends keyof LeadFormValues>(field: K, value: LeadFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

    if (state === 'error') {
      setState('idle');
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadForm({
      values,
      showEmail,
    });

    if (hasLeadFormErrors(nextErrors)) {
      setErrors(nextErrors);
      setState('idle');
      return;
    }

    setErrors({});
    setSubmitError('');
    setState('submitting');

    try {
      const payload = buildLeadFormPayload({
        values,
        props: {
          service,
          formId,
          blockId,
          showEmail,
          showComment,
        },
      });

      await submitLeadForm(payload);
      setValues(INITIAL_FORM_VALUES);
      setErrors({});
      setState('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : ERROR_MESSAGE);
      setState('error');
    }
  }

  if (isSuccess) {
    return (
      <div className={formClassName}>
        {/* {title && <h3 className={`${styles.form__title} font-h3 color--primary f-w-bold`}>{title}</h3>} */}
        <p className={`${styles.form__success} font-h3 color--primary`}>{SUCCESS_MESSAGE_TITLE}</p>
        <p className={`${styles.form__success} font-t-l color--primary`}>{SUCCESS_MESSAGE_DESC}</p>
        {/* <button
          type="button"
          className={styles.form__submit}
          onClick={() => {
            setValues(INITIAL_FORM_VALUES);
            setErrors({});
            setSubmitError('');
            setState('idle');
          }}
        >
          Отправить ещё одну заявку
        </button> */}
        <Button
          type="button"
          size="lg"
          variant="brand"
          fullWidth
          className={styles.form__submit}
          onClick={() => {
            setValues(INITIAL_FORM_VALUES);
            setErrors({});
            setSubmitError('');
            setState('idle');
          }}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit} noValidate>
      {title && <h3 className={`${styles.form__title} font-h3 color--primary f-w-bold`}>{title}</h3>}
      {description && <p className={`${styles.form__description} font-t-l color--primary`}>{description}</p>}

      <div className={styles.form__field}>
        <label htmlFor={`${formId}-${blockId}-name`} className={`${styles.form__label} font-t-s f-w-bold color--tertiary`}>
          Ваше имя
        </label>
        <input
          id={`${formId}-${blockId}-name`}
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange('name', event.target.value)}
          className={`${styles.form__input} font-t-m color--primary`}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-${blockId}-name-error` : undefined}
        />
        {errors.name && (
          <p id={`${formId}-${blockId}-name-error`} className={styles.form__error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.form__field}>
        <label htmlFor={`${formId}-${blockId}-phone`} className={`${styles.form__label} font-t-s f-w-bold color--tertiary`}>
          Ваш телефон
        </label>
        <input
          id={`${formId}-${blockId}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+7 (999) 123-45-67"
          value={values.phone}
          onChange={(event) => handleChange('phone', formatPhoneInput(event.target.value))}
          className={`${styles.form__input} font-t-m color--primary`}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${formId}-${blockId}-phone-error` : undefined}
        />
        {errors.phone && (
          <p id={`${formId}-${blockId}-phone-error`} className={styles.form__error}>
            {errors.phone}
          </p>
        )}
      </div>

      {showEmail && (
        <div className={styles.form__field}>
          <label htmlFor={`${formId}-${blockId}-email`} className={`${styles.form__label} font-t-s f-w-bold color--tertiary`}>
            Email
          </label>
          <input
            id={`${formId}-${blockId}-email`}
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className={`${styles.form__input} font-t-m color--primary`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-${blockId}-email-error` : undefined}
          />
          {errors.email && (
            <p id={`${formId}-${blockId}-email-error`} className={styles.form__error}>
              {errors.email}
            </p>
          )}
        </div>
      )}

      {showComment && (
        <div className={styles.form__field}>
          <label htmlFor={`${formId}-${blockId}-comment`} className={`${styles.form__label} font-t-s f-w-bold color--tertiary`}>
            Комментарий
          </label>
          <textarea id={`${formId}-${blockId}-comment`} name="comment" value={values.comment} onChange={(event) => handleChange('comment', event.target.value)} className={styles.form__textarea} rows={4} />
        </div>
      )}

      <div className={styles.form__checkbox}>
        <label className={styles.form__checkboxLabel}>
          <input type="checkbox" checked={values.consent} onChange={(event) => handleChange('consent', event.target.checked)} />
          <span className="font-t-m">Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и даёте согласие на обработку персональных данных.</span>
        </label>
        {errors.consent && <p className={styles.form__error}>{errors.consent}</p>}
      </div>

      {state === 'error' && <p className={styles.form__error}>{submitError || ERROR_MESSAGE}</p>}

      {/* <button type="submit" className={styles.form__submit} disabled={isSubmitting}>
        {isSubmitting ? 'Отправляем...' : submitLabel}
      </button> */}
      <Button
        type="submit"
        size="lg"
        // icon={{
        //   name: 'arrowUpRight',
        // }}
        variant="brand"
        disabled={isSubmitting}
        fullWidth
        className={styles.form__submit}
      >
        {isSubmitting ? 'Отправляем...' : submitLabel}
      </Button>
    </form>
  );
}
