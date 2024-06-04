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
            <div>
              <p>delete</p>
              <Link href={'/meetup/123'}>
                <HiPencilAlt />
              </Link>
            </div>
          </>
        ))}
      </ul>
    </>
  );
}

export default MeetupList;
