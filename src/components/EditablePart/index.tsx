import {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import Button from 'ui-kit/Button';

export interface IEditable {
  property: string;
  onChange(e: React.ChangeEvent<HTMLDivElement>): void;
}

const EditablePart: FC<IEditable> = ({property, onChange}) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [enter, setEnter] = useState<boolean>(false);
  const editableRef = useRef<HTMLDivElement>(null);

  const handlerInput = (e: React.ChangeEvent<HTMLDivElement>) => {
    onChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const range = document.createRange();
    if (editableRef.current) range.selectNodeContents(editableRef.current);
    range.collapse(false);
    const selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  useEffect(() => {
    if (editable && editableRef.current) {
      editableRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(editableRef.current);
      range.collapse(false);
      const selection = document.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, [editable]);

  return (
    <div
      className="w-full flex gap-md items-center overflow-hidden"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}>
      <div
        className="outline-none ml-[-1px]"
        contentEditable={editable}
        suppressContentEditableWarning
        ref={editableRef}
        onKeyUp={handleKeyDown}
        onInput={handlerInput}
        dangerouslySetInnerHTML={{__html: property}}
      />
      <div className={`flex duration-300 ${enter ? 'opacity-1' : 'opacity-0'}`}>
        <Button
          secondary
          onClick={() => {
            setEditable(true);
          }}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditablePart;
