import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { ToggleButton } from '../atoms/ToggleButton'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

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
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo />
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="h6">Tell us about your work</Typography>

            <Typography style="caption" className="text-primary-600">
              Select all the areas of responsibility that apply to you.
            </Typography>
          </div>

          <div className="flex flex-col">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-b border-primary-100 w-full">
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
            <div className="text-left px-2">
              <Typography style="caption" className="text-error-400">
                {errors.responsibilities}
              </Typography>
            </div>
          )}
        </div>

        <Button
          style="primary"
          onClick={ctaClicked}
          disabled={loading || responsibilities.every(r => !r.isChecked)}
          label="CONTINUE"
          className="w-full"
        />
      </div>
    </div>
  );
}
