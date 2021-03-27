// Application Import
import { apiClient } from './api'
import { exampleMockedData } from '@mock/example.mock'
import {
  ExampleListPayload,
  ExampleSinglePayload,
  ExampleUpdatePayload,
  IExample,
  ExampleResponse,
  ExampleDeletePayload,
} from '@typings/index'

export async function fetchExamples(): Promise<IExample[]> {
  return exampleMockedData
  // return await apiClient.get(`/example`)
}

export async function addExample(example: ExampleSinglePayload): Promise<ExampleResponse> {
  const { data } = await apiClient.post<ExampleResponse>(`/example`, example)
  return data
}

export async function addMultipleExample(payload: ExampleListPayload): Promise<ExampleResponse> {
  const { data } = await apiClient.put<ExampleResponse>('/example', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return data
}

export async function updateExample(payload: ExampleUpdatePayload): Promise<ExampleResponse> {
  const { id, ...rest } = payload
  const { data } = await apiClient.patch<ExampleResponse>(`/example/${id}`, rest)
  return data
}

export async function deleteExample(payload: ExampleDeletePayload): Promise<ExampleResponse> {
  const id = payload.id
  const { data } = await apiClient.delete<ExampleResponse>(`/example/${id}`)
  return data
}
