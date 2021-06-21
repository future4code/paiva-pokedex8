import React from 'react'
import Button from '@material-ui/core/Button';
import { ErrorButtons, ErrorDisplay } from './styled';
import { useHistory } from 'react-router-dom';
import { goToHome, goToLastPage } from '../../routes/coordinator';


const ErrorPage = () => {
    const history = useHistory()

    return(
        <ErrorDisplay>
            <h1>PAGINA NÃO ENCONTRADA</h1>
            <ErrorButtons>
                <Button className="HeaderButton" variant="contained" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
                <Button className="HeaderButton" variant="contained" color="secondary" onClick={() => goToHome(history)}>Ir para Home</Button>
            </ErrorButtons>
    
        </ErrorDisplay>
    )
}

export default ErrorPage