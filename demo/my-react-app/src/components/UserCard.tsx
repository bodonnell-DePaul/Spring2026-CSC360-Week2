import React from 'react';
// Props with complex types
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
  showActions?: boolean;
}


const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete, 
  showActions = true 
}) => {
  return (
    <div className="user-card">
      {user.avatar && <img src={user.avatar} alt={`${user.name}'s avatar`} />}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      
      {showActions && (
        <div className="user-actions">
          {onEdit && (
            <button onClick={() => onEdit(user)}>Edit</button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(user.id)}>Delete</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserCard;