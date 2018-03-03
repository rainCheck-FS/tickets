import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import EventListingItem from './EventListingItem.jsx'

/**
 * COMPONENT
 */
function AllEvents(props){
  const events = props.events;
  const user = props.user.adminStatus
  console.log('user in all users: ', user);
  return (
    <div>
      <div className="allEvents-headers">
        <h1>All Events</h1>
        {user ? (
          <Link to={`/event/add`}>
            <button type="button">+ Add Event</button>
          </Link>
        ) : (
          null
        )}
      </div>


      <div className="allEventsList">
        {
          events.map(event => {
            return (
              <EventListingItem
                key={event.id}
                event={event}
              />
            )
          })
        }

      </div>
    </div>

  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    events: state.events.events,
    user: state.user
  }
}

export default connect(mapState)(AllEvents)
