import { render, fireEvent } from '@testing-library/react';
import Home from '../views/Home';
import { fetchScrapResult } from '../Api';
jest.mock('../Api')

test('renders home page', () => {
    const { getByText } = render(<Home />);
    const EnterUrl = getByText(/Enter Url/i);
    const ClearButton = getByText(/Clear/i);
    const SearchButton = getByText(/Search/i);
    expect(EnterUrl).toBeInTheDocument();
    expect(ClearButton).toBeInTheDocument();
    expect(SearchButton).toBeInTheDocument();
});


test('show error when invalid url is entered', () => {
    const { getByText } = render(<Home />);
    const EnterUrl = getByText(/Enter Url/i);
    const searchInput = EnterUrl.parentElement.nextElementSibling
    fireEvent.change(searchInput, { target: { value: '23' } })
    const invalidUrl = getByText(/Invalid Url/i);
    expect(invalidUrl).toBeInTheDocument();
});


test('should call api when search button is clicked', async () => {
    const { getByText } = render(<Home />);
    const EnterUrl = getByText(/Enter Url/i);
    const searchInput = EnterUrl.parentElement.nextElementSibling
    fireEvent.change(searchInput, { target: { value: 'https://testing-library.com/docs/example-input-event/' } })
    fetchScrapResult.mockImplementation(() => Promise.resolve({ result: [] }))

    const SearchButton = getByText(/Search/i);
    fireEvent.click(SearchButton)
    expect(fetchScrapResult).toHaveBeenCalled()
});