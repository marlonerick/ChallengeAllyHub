//Imports padrão.
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilo do desafios 2 - Destino de Interrese.
import './style/DestinoInteresse.css'
import api from "./services/api.js";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

// React Hooks
import { useEffect, useState } from 'react';

//React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

//MASK
import InputMask from 'react-input-mask';

// YUP para validação
import * as yup from "yup";
import { } from "yup";

//YUP Validação de campo
const schema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().required(),
    telefone: yup.string().required(),
    cpf: yup.string().required(),
    paises: yup.string(),
    cidades: yup.string(),
}).required();

//Function de renderização.
function DestinoInteresse(props) {

    const [paises, setPaises] = useState('')
    const [cidades, setCidades] = useState('')

    //API Rest ( api.get para pegar todos os dados da API)
    useEffect(() => {
        //API Paises
        api.get("https://amazon-api.sellead.com/country").then((response) => {
            setPaises(response.data)
        }).catch((err) => {
            console.log(err)
        })
        //API Cidades.
        api.get("https://amazon-api.sellead.com/city").then((response) => {
            setCidades(response.data)
        }).catch((err) => {
            console.log(err)
        })

    }, []);

    //Validação de campo com React Hook Forms
    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const handleSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <Container>
                {/* Submit para validação de campos passando os dados.
                    Interface do projeto com componets Bootsrap */}
                <Form onSubmit={onSubmit(handleSubmit)}>
                    <Row>
                        <Col>
                            <div className="pessoal">
                                <p>Dados Pessoais</p>
                                <Form.Group className="mb-2" controlId="formGridEmail">
                                    <div><p></p>Nome</div>
                                    <Form.Control maxLength={40} type="text" placeholder="Nome Completo" {...register("nomeCompleto")} />
                                    {/* Alert para validação de campos. */}
                                    {errors.nomeCompleto?.message && <Alert className='alert alert-danger d-flex'>Preencher o campo Nome Completo.</Alert>}
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="email@email.com.br" {...register("email")} />
                                    {/* Alert para validação de campos. */}
                                    {errors.email?.message && <Alert className='alert alert-danger d-flex'>Preencher campo email Ex..: email@email.com.br</Alert>}
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formGridAddress2">
                                    <Form.Label>Telefone</Form.Label>
                                    {/* Campo com Mascara utilizando npm mask InputMask */}
                                    <InputMask type="text" className='form-control'
                                        mask='(99) 9 9999-9999'
                                        value={props.value}
                                        onChange={props.onChange}
                                        placeholder="Ex.: 000.000.000-00"
                                        {...register("telefone")}>
                                    </InputMask>
                                    {/* Alert para validação de campos. */}
                                    {errors.telefone?.message && <Alert className='alert alert-danger d-flex'>Preencher campo telefone Ex.: (00) 0 0000-0000.</Alert>}
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formGridAddress2">
                                    <Form.Label>CPF</Form.Label>
                                    {/* Campo com Mascara utilizando npm mask InputMask */}
                                    <InputMask type="text" className='form-control'
                                        mask='999.999.999-99'
                                        value={props.value}
                                        onChange={props.onChange}
                                        placeholder="Ex.: 000.000.000-00"
                                        {...register("cpf")}>
                                    </InputMask>
                                    {/* Alert para validação de campos. */}
                                    {errors.cpf?.message && <Alert className='alert alert-danger d-flex'>Preencher campo cpf Ex.: 000.000.000-00.</Alert>}
                                </Form.Group>

                            </div>
                        </Col>
                        <Col>
                            <div className="interesse">
                                <p>Dados de Interesse</p>
                                {/*Validação do campo Select Option nao finalizado, vou buscar conhecimento para finalizar o projeto. */}
                                <Form.Label>Paises</Form.Label>
                                <Form.Select  {...register("paises")}>
                                    <option > Selecione... </option>
                                    {
                                        // Entrada de dados da API renderizando todos os dados de paises
                                        Object.values(paises).map((x, y) => (
                                            <option value={x.name_ptbr} key={y.id}>{x.name_ptbr}</option>
                                        ))
                                    }
                                </Form.Select >
                                <Form.Label>Cidades</Form.Label>
                                <Form.Select id="cidades" {...register("cidades")}>
                                    <option selected> Selecione... </option>
                                    {
                                        // Entrada de dados da API renderizando todos os dados de cidades.
                                        Object.values(cidades).map((x, y) => (
                                            <option key={y} >{x.name_ptbr}</option>
                                        ))
                                    }
                                </Form.Select>
                                <br />
                            </div>
                        </Col>
                        {/* Envio de todos os dados faltando apenas validação do campo Select. */}
                        <div className="g-col-7 g-col-md-6 b-enviar">
                            <Button className="mb-2" variant="primary" type="submit">
                                Enviar
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Container >
        </>
    )
}
//Exportação da Function DestinoInteresse.
export default DestinoInteresse;