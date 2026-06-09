import { useState } from 'react';
import styles from './LeadForm.module.scss';

import { DEFAULT_SUBMIT_LABEL, ERROR_MESSAGE, INITIAL_FORM_VALUES, SUCCESS_MESSAGE } from './lead-form.constants';
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
        {title && <h3 className={styles.form__title}>{title}</h3>}
        <p className={styles.form__success}>{SUCCESS_MESSAGE}</p>
        <button
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
        </button>
      </div>
    );
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit} noValidate>
      {title && <h3 className={styles.form__title}>{title}</h3>}
      {description && <p className={styles.form__description}>{description}</p>}

      <div className={styles.form__field}>
        <label htmlFor={`${formId}-${blockId}-name`} className={styles.form__label}>
          Ваше имя
        </label>
        <input
          id={`${formId}-${blockId}-name`}
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange('name', event.target.value)}
          className={styles.form__input}
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
        <label htmlFor={`${formId}-${blockId}-phone`} className={styles.form__label}>
          Ваш телефон
        </label>
        <input
          id={`${formId}-${blockId}-phone`}
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => handleChange('phone', event.target.value)}
          className={styles.form__input}
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
          <label htmlFor={`${formId}-${blockId}-email`} className={styles.form__label}>
            Email
          </label>
          <input
            id={`${formId}-${blockId}-email`}
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className={styles.form__input}
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
          <label htmlFor={`${formId}-${blockId}-comment`} className={styles.form__label}>
            Комментарий
          </label>
          <textarea id={`${formId}-${blockId}-comment`} name="comment" value={values.comment} onChange={(event) => handleChange('comment', event.target.value)} className={styles.form__textarea} rows={4} />
        </div>
      )}

      <div className={styles.form__checkbox}>
        <label className={styles.form__checkboxLabel}>
          <input type="checkbox" checked={values.consent} onChange={(event) => handleChange('consent', event.target.checked)} />
          <span>Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и даёте согласие на обработку персональных данных.</span>
        </label>
        {errors.consent && <p className={styles.form__error}>{errors.consent}</p>}
      </div>

      {state === 'error' && <p className={styles.form__error}>{submitError || ERROR_MESSAGE}</p>}

      <button type="submit" className={styles.form__submit} disabled={isSubmitting}>
        {isSubmitting ? 'Отправляем...' : submitLabel}
      </button>
    </form>
  );
}
