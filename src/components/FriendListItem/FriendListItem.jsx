function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p style={{ fontWeight: "700", color: "black" }}>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
