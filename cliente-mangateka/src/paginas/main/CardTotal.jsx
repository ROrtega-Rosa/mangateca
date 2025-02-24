import React from "react";
import { StyledCardTotal, StyleMangaCount } from "../../componentes/style";

const CardTotal = ({ currentManga }) => {
    return (
        <StyledCardTotal>

            <StyleMangaCount>{currentManga.length}</StyleMangaCount>
            <div clasName="manga-label">Total Mangas</div>
        </StyledCardTotal>
    )
}

export default CardTotal;