import { useCallback, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import clsx from 'clsx'
import Button from '../../atoms/Button';

export default function Form({onSubmit, buttonLabel, children}: any) {
  const methods = useForm();

  const onSubmitHelper = useMemo(() => {
    return methods.handleSubmit((data, e) => onSubmit(data, e, methods))
  }, [methods, onSubmit]); 

  return (
    <FormProvider {...methods} >
      <form className={clsx(
        'flex flex-col p-8 bg-gray-700 rounded-lg shadow-lg m-4',
        'mt-auto mx-4 mb-8',
        'sm:m-auto sm:w-full sm:max-w-md'
      )} onSubmit={onSubmitHelper}>
        {children}
        <Button className="mt-10" isLoading={methods.formState.isSubmitting}>{buttonLabel}</Button>
      </form>
    </FormProvider>
  )
}
