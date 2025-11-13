import React from 'react';
import {RoutePermittedRole} from '@crema/constants/AppEnums';

const Incorporation = React.lazy(() => import('../../../modules/documents/IncorporationPage'));
const Protocols = React.lazy(() => import('../../../modules/documents/ProtocolsPage'));
const Regulations = React.lazy(() => import('../../../modules/documents/RegulationsPage'));
const Memorandums = React.lazy(() => import('../../../modules/documents/MemorandumsPage'));
export const documentConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/documents/incorporation/',
    element: <Incorporation />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/documents/protocols/',
    element: <Protocols />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/documents/regulations/',
    element: <Regulations />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/documents/memorandums/',
    element: <Memorandums />,
  },
];