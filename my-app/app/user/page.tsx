import { ErrorBoundaryComponent } from "@/utils/customErrorBoundary";

import { UserProfile } from "./components/userProfile";

export default function UserPage() {
  return (
    <>
      <ErrorBoundaryComponent>
        <UserProfile />
      </ErrorBoundaryComponent>
      TEST PAGE
    </>
  );
}
