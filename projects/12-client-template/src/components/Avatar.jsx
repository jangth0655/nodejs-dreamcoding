import React, { memo } from "react";

const Avatar = memo(({ url, name }) => (
  <div>
    {!!url ? (
      <img
        src={`https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png`}
        alt="avatar"
        className="avatar-img"
      />
    ) : (
      <div className="avatar-txt">{name?.charAt(0)}</div>
    )}
  </div>
));

export default Avatar;
