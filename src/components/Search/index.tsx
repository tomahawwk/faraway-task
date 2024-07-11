import {Input} from '@material-tailwind/react';
import {FC} from 'react';
import {ISearch} from './types';

const Search: FC<ISearch> = ({onChange}) => {
  return (
    <div className="search w-full">
      <Input
        variant="standard"
        label="Search characters"
        color="white"
        onChange={onChange}
        crossOrigin={undefined}
      />
    </div>
  );
};

export default Search;
