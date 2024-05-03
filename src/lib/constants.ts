import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export const appLink = 't.me/byUlbiTVtestbot/something';

export const defaultTasks = [
  {
    id: 1,
    title: 'Подпишись на канал',
    completed: false,
    reward: 1,
    link: 'https://youtube.com',
    icon: YouTubeIcon,
  },
  {
    id: 2,
    title: 'Подпишись на бота',
    completed: false,
    reward: 1,
    link: 'https://t.me/BotFather',
    icon: TelegramIcon,
  },
  {
    id: 3,
    title: 'Подпишись на наш твиттер',
    completed: false,
    reward: 1,
    link: 'https://twitter.com/home',
    icon: XIcon,
  },
];