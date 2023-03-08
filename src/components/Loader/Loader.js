import { Oval } from  'react-loader-spinner'
import { LoaderStyled } from './loaderStyled'

export default function Loader () {
    return (
        <LoaderStyled>
            <Oval
                height={80}
                width={80}
                color="#000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3f51b5"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
  </LoaderStyled>
  )
}
