import { getSocket } from './actios/socketActions';
import { useDispatch } from 'react-redux';
import { useSocket } from './hooks/useSocket';
import HomePage from './pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();
  const { socket, online } = useSocket(
    'https://socket-bands-app.herokuapp.com/'
  );
  dispatch(getSocket(socket, online));

  return (
    <>
      <HomePage />
    </>
  );
};

// useEffect(() => {
//   console.log(socket);

//   //muesa el estado de la ultima conexion
//   //el cual puede ser differente al actual
//   //setOnline(socket.connected); ==> lo termione sacando por que queda enganchado con la ultima conexion y falla
//   //estos escuchan si nos conectamos y nos desconectamos
//   socket.on('connect', () => {
//     setOnline(true);

//     socket.on('disconnect', () => {
//       setOnline(false);
//     });
//   });
// }, [socket]);
