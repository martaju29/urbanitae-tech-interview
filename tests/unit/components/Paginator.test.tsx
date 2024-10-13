import React from 'react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Paginator } from '../../../src/components/Paginator/Paginator'

const mockHandleNextPage = vi.fn()
const mockHandlePreviousPage = vi.fn()

describe('Paginator component testing', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  
  test('should render the paginator with current and total pages', () => {
    render(
      <Paginator
        currentPage={3}
        totalPages={10}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    )

    expect(screen.getByText('3 / 10')).toBeTruthy()
  })

  test('should disable the previous button when currentPage is 1', () => {
    render(
      <Paginator
        currentPage={1}
        totalPages={10}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    )

    const prevButton = screen.getByRole('button', { name: /Previous page/i })
    expect(prevButton.getAttribute('disabled')).not.toBeNull()
  })

  test('should disable the next button when currentPage is equal to totalPages', () => {
    render(
      <Paginator
        currentPage={10}
        totalPages={10}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    )

    const nextButton = screen.getByRole('button', { name: /Next page/i })
    expect(nextButton.getAttribute('disabled')).not.toBeNull()
  })

  test('should call handleNextPage when the next button is clicked', () => {
    render(
      <Paginator
        currentPage={5}
        totalPages={10}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    )

    const nextButton = screen.getByRole('button', { name: /Next page/i })
    fireEvent.click(nextButton)

    expect(mockHandleNextPage).toHaveBeenCalledTimes(1)
  })

  test('should call handlePreviousPage when the previous button is clicked', () => {
    render(
      <Paginator
        currentPage={5}
        totalPages={10}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    )

    const prevButton = screen.getByRole('button', { name: /Previous page/i })
    fireEvent.click(prevButton)

    expect(mockHandlePreviousPage).toHaveBeenCalledTimes(1)
  })
})
