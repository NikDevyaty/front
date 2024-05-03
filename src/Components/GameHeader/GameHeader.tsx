import { IconButton, Typography } from '@mui/material';
import track from '../../assets/track.mp3';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useEffect, useState } from 'react';
import { userAtom } from '~/lib/userAtom';
import { useAtomValue } from 'jotai';

interface IGameHeader {
  headerClass?: string;
  headerBtnClass?: string;
}

const GameHeader = ({ headerClass = 'game__header' }: IGameHeader) => {
  const [isSound, setIsSound] = useState(false);
  const toggleSound = () => setIsSound(!isSound);
  const user = useAtomValue(userAtom);

  useEffect(() => {
    const audio = new Audio(track);

    if (isSound) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0; // Сбросить время воспроизведения
    };
  }, [isSound]);

  return (
    <header className={headerClass}>
      <IconButton onClick={toggleSound}>{isSound ? <MusicNoteIcon color="secondary" /> : <MusicOffIcon />}</IconButton>
      <div>
        <Typography variant="h6">
          Total TON: <span>{user.totalTON}</span>
        </Typography>
        {/* <Avatar alt="Your avatar" src={avatar} /> */}
      </div>
      <Typography fontSize={'15px'}>{user.name}</Typography>
    </header>
  );
};

export default GameHeader;
