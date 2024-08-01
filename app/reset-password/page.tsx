// app/reset-password/page.tsx

import React from 'react';
import ResetPassword from './ResetPassword';
import SuspenseBoundary from '../../SuspenseBoundary'; // Adjust the path if necessary

const Page = () => (
  <SuspenseBoundary>
    <ResetPassword />
  </SuspenseBoundary>
);

export default Page;
