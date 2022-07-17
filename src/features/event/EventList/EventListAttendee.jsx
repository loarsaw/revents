import { Avatar, WrapItem } from "@chakra-ui/react";

import React from "react";

function EventListAttendee({attendee}) {
  return (
    <WrapItem>
      <Avatar name="Dan Abrahmov" src={attendee.photoURL} />
    </WrapItem>
  );
}

export default EventListAttendee;
