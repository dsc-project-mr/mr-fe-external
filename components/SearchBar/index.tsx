import FilledInput from '@mui/material/FilledInput'

const SearchBar = () => {
  return (
    <FilledInput
      hiddenLabel
      disableUnderline
      size="small"
      sx={{
        borderRadius: '0.4rem',
        color: 'inherit',
        minWidth: '40%',
        margin: '0 0 0 auto',
      }}
      placeholder="Search"
    />
  )
}

export default SearchBar
