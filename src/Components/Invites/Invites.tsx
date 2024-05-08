import './Invites.scss';
import { Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { BOT_URL } from '~/lib/constants';
import useTelegram from '~/lib/hooks/useTelegram';
import { userAtom } from '~/lib/atoms/userAtom';

const Invites = () => {
  const { userId } = useTelegram();
  const user = useAtom(userAtom);
  const [userMsg, setUserMsg] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    console.log(e.currentTarget.innerText);
    navigator.clipboard
      .writeText(e.currentTarget.innerText)
      .then(() => {
        setUserMsg('Ссылка скопирована!');
      })
      .catch(() => {
        setUserMsg('Не удалось скопировать одним кликом');
      });
  };

  return (
    <div className="invites">
      <Typography variant="h5">Реферальная программа</Typography>
      <div className="invites__content">
        <Typography variant="h6">Ваш id: {userId}</Typography>
        <Typography className="invites__referal-link-block">
          Ваша реферальная ссылка:
          <span className="invites__referal-link" onClick={handleClick}>
            {BOT_URL}?startapp={userId}
          </span>
        </Typography>
        {user[0].dataGame.byReferral && user[0].dataGame.byReferral !== null ? (
          <Typography variant="h6">Вас пригласил пользователь с id: {user[0].dataGame.byReferral}</Typography>
        ) : null}
        <span className="invites__user-msg">{userMsg}</span>
      </div>
    </div>
  );
};

export default Invites;
