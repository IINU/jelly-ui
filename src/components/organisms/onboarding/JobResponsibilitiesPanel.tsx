import { useEffect, useState } from 'react'
import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { ToggleButton } from '../../atoms/ToggleButton'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'

type Errors = { responsibilities: string }

interface Responsibility<T> {
  item: T;
  isChecked: boolean;
}

interface Props<T> {
  responsibilities: Responsibility<T>[];
  submit: (selectedResponsibilities: T[]) => void;
  getText: (item: T) => string;
  loading?: boolean;
  errors?: Errors;
}

export function JobResponsibilitiesPanel<T>({
  responsibilities: initialResponsibilities,
  submit,
  getText,
  loading,
  errors,
}: Props<T>) {
  const [responsibilities, setResponsibilities] = useState<Responsibility<T>[]>(initialResponsibilities);

  useEnterSubmit({ ctaClicked });
  useEffect(() => {
    setResponsibilities(initialResponsibilities);
  }, [initialResponsibilities]);

  function ctaClicked() {
    const selectedResponsibilities = responsibilities
      .filter(r => r.isChecked)
      .map(r => r.item);
    submit(selectedResponsibilities);
  }

  function toggleResponsibility(index: number) {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index].isChecked = !newResponsibilities[index].isChecked;
    setResponsibilities(newResponsibilities);
  }

  return (
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary />
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-flex jui-flex-col jui-space-y-6 jui-w-full">
          <div className="jui-flex jui-flex-col jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              Tell us about your work
            </Typography>

            <Typography style="caption" className="jui-text-primary-600">
              Select all the areas of responsibility that apply to you.
            </Typography>
          </div>

          <div className="jui-flex jui-flex-col">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="jui-flex jui-justify-between jui-items-center jui-p-3 jui-border-b jui-border-primary-100 jui-w-full">
                <Typography style="caption">
                  {getText(responsibility.item)}
                </Typography>

                <ToggleButton
                  value={responsibility.isChecked}
                  size="small"
                  onChange={() => toggleResponsibility(index)}
                />
              </div>
            ))}
          </div>

          {errors?.responsibilities && (
            <div className="jui-text-left jui-px-2">
              <Typography style="caption" className="jui-text-error-400">
                {errors.responsibilities}
              </Typography>
            </div>
          )}
        </div>

        <Button
          style="primary"
          onClick={ctaClicked}
          disabled={loading || responsibilities.every(r => !r.isChecked)}
          label="Continue"
          className="jui-w-full"
        />
      </div>
    </div>
  );
}
