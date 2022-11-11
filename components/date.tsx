import { asDate } from '@prismicio/helpers';
import { DateField } from '@prismicio/types';

const formatter = new Intl.DateTimeFormat('es-ES', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

type DateProps = {
  dateField: DateField;
};

export default function Date({ dateField, ...rest }: DateProps) {
  const date = asDate(dateField);

  return (
    <div {...rest}>
      <time dateTime={dateField}>{formatter.format(date)}</time>
    </div>
  );
}
