import RemoveBtn from '../ui/RemoveBtn';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

function MeetupList(props) {
  return (
    <>
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <>
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
            <div style={{display: 'flex', gap: '30px', width: '100%'}}>
              <RemoveBtn />
              <Link href={'/editmeetup/123'}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </>
        ))}
      </ul>
    </>
  );
}

export default MeetupList;
