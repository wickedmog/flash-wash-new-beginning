import React from 'react';
import {RouteProp} from '@react-navigation/native';

import {DetailedService} from './detailedService';
import {StackNavigatorParamlist} from '../types';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'Servicios'>;
};

export const Details = (props: Props) => {
  return <DetailedService {...props} />;
};
