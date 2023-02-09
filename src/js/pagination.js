import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';

export function makeTuiPagination(totalItems, totalPages) {
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.paginationEl, options);

  if (visiblePages <= 1) {
    refs.paginationEl.style.display = 'none';
  } else {
    refs.paginationEl.style.display = 'block';
  }

  return pagination;
}

export const ITEM_PER_PAGE = 12;
export function makeTuiPaginationInLibrary(totalItems) {
  const visiblePages =
    totalItems / ITEM_PER_PAGE < 5 ? Math.ceil(totalItems / ITEM_PER_PAGE) : 5;
  const options = {
    totalItems,
    itemsPerPage: ITEM_PER_PAGE,
    visiblePages,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.paginationEl, options);

  if (visiblePages <= 1) {
    refs.paginationEl.style.display = 'none';
  } else {
    refs.paginationEl.style.display = 'block';
  }

  return pagination;
}
