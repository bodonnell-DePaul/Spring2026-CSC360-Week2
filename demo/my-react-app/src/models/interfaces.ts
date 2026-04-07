
interface GreetingProps {
  name: string;        // Required: component MUST receive a name
  age?: number;        // Optional: the ? means this prop is optional
  isVip?: boolean;     // Optional: defaults to false if not provided
}
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

export type { GreetingProps, User, UserCardProps };