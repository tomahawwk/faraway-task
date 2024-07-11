import EditablePart, {IEditable} from 'components/EditablePart';
import {FC} from 'react';

export interface ICharacterProperty extends IEditable {
  delay: number;
  title: string;
}

const CharacterProperty: FC<ICharacterProperty> = ({
  onChange,
  property,
  delay,
  title,
}) => {
  return (
    <div
      className={`flex items-center text-[18px] gap-xs animation-fade-y animation-delay-${delay}`}>
      <div className="flex items-center gap-sm">
        <div className="w-[45px] h-[45px] relative rounded-full bg-grey">
          <img
            src={`images/${title}.svg`}
            className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[22px]"
            alt={title}
          />
        </div>
        <span className="capitalize">{title}:</span>
      </div>
      <span className="text-primary-main">
        <EditablePart
          onChange={(e: React.ChangeEvent<HTMLDivElement>) => onChange(e)}
          property={property}
        />
      </span>
    </div>
  );
};

export default CharacterProperty;
