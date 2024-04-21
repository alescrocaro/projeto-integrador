import { Box } from "@mui/material";
import StyledTable from "../../../../../components/Table";
import { Img, Subsubtitulo, Subtitulo } from "../../../style";
import Map from "../../Map";
const postMapPlaceholderImage = require("../../../../../img/foto1.jpg");

const MapComponent = ({ post }) => {
  if (post.latlng) {
    return <Map post={post} />;
  }

  return <Img src={postMapPlaceholderImage} alt="img" />;
};

const LocationSection = ({ post }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: ".5rem",
        padding: "1rem",
      }}
    >
      <Subtitulo>LOCAL E DATA:</Subtitulo>

      <MapComponent post={post} />

      <Subsubtitulo>DETALHES:</Subsubtitulo>
      <StyledTable data={post} detailsTable />
    </Box>
  );
};

export default LocationSection;
