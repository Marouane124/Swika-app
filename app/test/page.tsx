// YourComponent.tsx
import { AuthWrapper } from '@/components/AuthWrapper';
import Logoutbutton from '@/components/LogoutButton';

export default function YourComponent() {
  return (
    <AuthWrapper>
      <YourComponentContent />
    </AuthWrapper>
  );
}

function YourComponentContent() {
  return (
    <div>
      <h1>Protected Content</h1>
      <Logoutbutton />
    </div>
  );
}