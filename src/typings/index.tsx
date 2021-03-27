import { IconType } from 'react-icons'

// Sidebar Classes

export interface INavItem {
  Icon: IconType
  pathname: string
}

export enum NavItemState {
  active = 'ACTIVE',
  normal = 'NORMAL',
}

// Model Classes Example

export interface IExample {
  id: number
  title: string
  desc: string
  type: EnumExample
}

export enum EnumExample {
  active = 'ACTIVE',
  normal = 'NORMAL',
  disable = 'DISABLE',
}

// CRUD Classes Example

export interface ExampleListPayload {
  examples: IExample[]
}

export interface ExampleSinglePayload {
  example: IExample
}

export interface ExampleUpdatePayload {
  id: string
  example: IExample
}

export interface ExampleDeletePayload {
  id: string
}

export interface ExampleResponse {
  success: boolean
  message?: string
}
