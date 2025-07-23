import { SxProps } from "@mui/material"

const centerBox : () => SxProps = () => {
    const props : SxProps = {
        display:'flex',
        alignItems: "center",
        justifyContent:'center'
    }
    return props
}

export default centerBox