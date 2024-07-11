import CharacterProperty from 'components/CharacterProperty';
import EditablePart from 'components/EditablePart';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'store/hooks/redux';
import {ICharacter} from 'store/models/ICharacter';
import {fetchCharacter} from 'store/reducers/ActionCreators';
import {initialCharacter} from 'store/reducers/CharacterSlice';
import Button from 'ui-kit/Button';
import Loader from 'ui-kit/Loader';

const Character = () => {
  const {id} = useParams();
  const [localCharacter, setLocalCharacter] =
    useState<ICharacter>(initialCharacter);

  const {character} = useAppSelector(state => state.characterReducer);
  const dispatch = useAppDispatch();

  const handleInputChange = (
    name: string,
    event: React.ChangeEvent<HTMLDivElement>,
  ) => {
    const {innerText} = event.target;
    setLocalCharacter(prevCharacter => ({
      ...prevCharacter,
      [name]: innerText,
    }));
    localStorage.setItem(
      `character-${id}`,
      JSON.stringify({
        ...localCharacter,
        [name]: innerText,
      }),
    );
  };

  const resetCharacter = () => {
    id && dispatch(fetchCharacter(id));
    localStorage.removeItem(`character-${id}`);
  };

  useEffect(() => {
    const storedCharacter = localStorage.getItem(`character-${id}`);
    if (storedCharacter) {
      setLocalCharacter(JSON.parse(storedCharacter));
    } else if (id) {
      dispatch(fetchCharacter(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const storedCharacter = localStorage.getItem(`character-${id}`);
    if (character && storedCharacter === null) {
      setLocalCharacter(character);
    }
  }, [character]);

  useEffect(() => {
    return () => {
      setLocalCharacter(initialCharacter);
    };
  }, []);

  if (localCharacter.name !== '')
    return (
      <div className="grid gap-lg md:gap-xl">
        <h1 className="text-[28px] md:text-[72px] animation-fade-y animation-delay-2 grid gap-sm w-full">
          <div className="flex items-center gap-md">
            <div
              className="w-[12px] h-[12px] animation-scale animation-delay-3 rounded-full bg-primary-main
            hidden md:block"
            />
            <EditablePart
              onChange={(e: React.ChangeEvent<HTMLDivElement>) =>
                handleInputChange('name', e)
              }
              property={localCharacter.name}
            />
          </div>
          <div className="w-full h-[1px] bg-primary-dark animation-scale-x animation-delay-3" />
        </h1>
        <div className="grid gap-md">
          <CharacterProperty
            onChange={(e: React.ChangeEvent<HTMLDivElement>) =>
              handleInputChange('height', e)
            }
            title="height"
            property={localCharacter.height}
            delay={3}
          />
          <CharacterProperty
            onChange={(e: React.ChangeEvent<HTMLDivElement>) =>
              handleInputChange('mass', e)
            }
            title="mass"
            property={localCharacter.mass}
            delay={4}
          />
          <CharacterProperty
            onChange={(e: React.ChangeEvent<HTMLDivElement>) =>
              handleInputChange('gender', e)
            }
            title="gender"
            property={localCharacter.gender}
            delay={5}
          />
          <CharacterProperty
            onChange={(e: React.ChangeEvent<HTMLDivElement>) =>
              handleInputChange('birth_year', e)
            }
            title="year"
            property={localCharacter.birth_year}
            delay={6}
          />
        </div>
        <div className="animation-fade-y animation-delay-7">
          <Button onClick={resetCharacter} secondary>
            Reset character
          </Button>
        </div>
      </div>
    );
  else {
    return <Loader />;
  }
};

export default Character;
