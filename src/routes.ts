import React from 'react';

import Home from '@/routes/home/Home';
import BdxBuddy from '@/routes/bdxbuddy/BdxBuddy';

type RouteT = {
  path: string;
  component: React.ComponentType<any>;
}

enum PATHS {
  HOME = '/',
  BDX_BUDDY = '/bdx-buddy',
}

export const ROUTES: Record<string, RouteT> = {
  HOME: {
    path: PATHS.HOME,
    component: Home,
  },
  BDX_BUDDY: {
    path: PATHS.BDX_BUDDY,
    component: BdxBuddy,
  },
}