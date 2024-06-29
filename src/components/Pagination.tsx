import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

type PaginationProps = {
  currentPage?: number;
  itemsPerPage: number;
  onChangePage: (page: number) => void;
  totalItems: number;
};

export function Pagination(props: PaginationProps) {
  const { currentPage = 1, itemsPerPage, onChangePage, totalItems } = props;

  return (
    <Box
      component="div"
      sx={{
        display: 'inline-lex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <MuiPagination
        color="primary"
        count={Math.ceil(totalItems / itemsPerPage)}
        page={currentPage}
        onChange={(_event, page) => onChangePage(page)}
        renderItem={(item) => <PaginationItem {...item} className="!text-white" />}
      />
    </Box>
  );
}
