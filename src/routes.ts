import React from 'react';

import Home from '@/routes/home/Home';
import BdxBuddy from '@/routes/bdxbuddy/BdxBuddy';
import BdxBuddyHelp from '@/routes/bdxbuddy/BdxBuddyHelp';

type RouteT = {
  path: string;
  component: React.ComponentType<any>;
}

export enum PATHS {
  HOME = '/',
  BDX_BUDDY = '/bdx-buddy',
  BDX_BUDDY_HELP = '/bdx-buddy/help',
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
  BDX_BUDDY_HELP: {
    path: PATHS.BDX_BUDDY_HELP,
    component: BdxBuddyHelp,
  },
}