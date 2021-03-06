import { Provider } from '@nestjs/common';

import {
  GRPC_MS_1_PACKAGE_NAME,
  GRPC_MS_3_PACKAGE_NAME,
  GRPC_MS_4_PACKAGE_NAME,
  GRPC_MS_5_PACKAGE_NAME,
  GRPC_MS_6_PACKAGE_NAME,
} from '@gmahechas/common-erp';

import { baseGrpc } from '@ms-0/utils/base.grpc';

export const grpcMs1: Provider = baseGrpc(GRPC_MS_1_PACKAGE_NAME, {
  options: {
    url: 'ms-1-service.ms-1-namespace.svc.cluster.local:50001',
    package: ['user', 'auth'],
    protoPath: '1/index.proto',
  },
});

export const grpcMs3: Provider = baseGrpc(GRPC_MS_3_PACKAGE_NAME, {
  options: {
    url: 'ms-3-service.ms-3-namespace.svc.cluster.local:50003',
    package: ['country', 'estate', 'city', 'address'],
    protoPath: '3/index.proto',
  },
});

export const grpcMs4: Provider = baseGrpc(GRPC_MS_4_PACKAGE_NAME, {
  options: {
    url: 'ms-4-service.ms-4-namespace.svc.cluster.local:50004',
    package: ['company', 'office'],
    protoPath: '4/index.proto',
  },
});

export const grpcMs5: Provider = baseGrpc(GRPC_MS_5_PACKAGE_NAME, {
  options: {
    url: 'ms-5-service.ms-5-namespace.svc.cluster.local:50005',
    package: ['type_person', 'type_identification', 'person'],
    protoPath: '5/index.proto',
  },
});

export const grpcMs6: Provider = baseGrpc(GRPC_MS_6_PACKAGE_NAME, {
  options: {
    url: 'ms-6-service.ms-6-namespace.svc.cluster.local:50006',
    package: ['menu', 'profile', 'profile_menu', 'user_profile'],
    protoPath: '6/index.proto',
  },
});
