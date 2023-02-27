import { useContext, useEffect } from "react";
import { ThemesContext } from "../../../contexts/Themes";
import Button from "../../Button";
import Input from "../../Input";
import {
  TypeAnnouncement,
  ContainerCreatedAnnouncement,
  HeaderAnnouncement,
  VehicleInformation,
  ContainerAgeKmPrice,
  ContainerDesc,
  TypeOfVehicle,
  ContainerImgs,
  ContainerBtnCreated,
} from "./styles";

const Announcement = () => {
  const {
    typeAnnoun,
    typeVehicle,
    imgsGalery,

    setTypeAnnoun,
    setTypeVehicle,
    newImage,
  } = useContext(ThemesContext);

  return (
    <ContainerCreatedAnnouncement>
      <div className="mainAnnouncement">
        <HeaderAnnouncement>
          <h1>Criar anuncio</h1>
          <Button width="12px" height="12px" border="none" textColor="#ADB5BD">
            X
          </Button>
        </HeaderAnnouncement>

        <TypeAnnouncement>
          <label>Tipo de anuncio</label>
          <div className="buttonsTypeAnnouncement">
            <Button
              onClick={() => {
                setTypeAnnoun({
                  yes: "isActive",
                  no: "desActive",
                });
              }}
              className={typeAnnoun.yes}
              id="btnVenda"
            >
              Venda
            </Button>
            <Button
              onClick={() => {
                setTypeAnnoun({
                  yes: "desActive",
                  no: "isActive",
                });
              }}
              className={typeAnnoun.no}
              id="btnLeilao"
            >
              Leilão
            </Button>
          </div>
        </TypeAnnouncement>

        <VehicleInformation>
          <label htmlFor="titleAnnuncement">Inormação do veículo</label>
          <Input
            type="text"
            id="titleAnnuncement"
            placeholder="Digitar título"
          />

          <ContainerAgeKmPrice>
            <div>
              <label htmlFor="ageAnnouncement">Ano</label>
              <Input
                type="number"
                id="ageAnnouncement"
                placeholder="Digitar ano"
              />
            </div>
            <div>
              <label htmlFor="kmAnnouncement">Kilometragem</label>
              <Input type="number" id="kmAnnouncement" placeholder="0" />
            </div>
            <div>
              <label htmlFor="priceAnnouncement">Preço</label>
              <Input
                type="number"
                id="priceAnnouncement"
                placeholder="Digitar preço"
              />
            </div>
          </ContainerAgeKmPrice>

          <ContainerDesc>
            <label htmlFor="descAnnouncement">Descrição</label>
            <textarea
              name="descAnnouncement"
              id="descAnnouncement"
              placeholder="Digitar descrição"
            />
          </ContainerDesc>

          <TypeOfVehicle>
            <label htmlFor="btnCar">Tipo de veículo</label>
            <div>
              <Button
                className={typeVehicle.yes}
                onClick={() => {
                  setTypeVehicle({
                    yes: "isActive",
                    no: "desActive",
                  });
                }}
                id="btnCar"
              >
                Carro
              </Button>
              <Button
                className={typeVehicle.no}
                onClick={() => {
                  setTypeVehicle({
                    yes: "desActive",
                    no: "isActive",
                  });
                }}
                id="btnMoto"
              >
                Moto
              </Button>
            </div>
          </TypeOfVehicle>

          <ContainerImgs>
            <div>
              <label htmlFor="urlImgCover">Imagem da capa</label>
              <Input id="urlImgCover" placeholder="Inserir URL da imagem" />
            </div>
            <div id="qtsImgAdd">
              <ul>
                {imgsGalery.map((ele, i) => (
                  <li key={i}>
                    <label htmlFor="urlImg1">{i + 1}° Imagem da galeria</label>
                    <Input placeholder="Inserir URL da imagem" />
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => newImage()}
              className="addImgInGalery"
              width="315px"
              height="38px"
              backColor="var(--brand4)"
              backColorFocus="var(--brand4)"
              textColor="var(--brand1)"
              textColorFocus="var(--brand1)"
              fontSize="14px"
              fontSizeFocus="14px"
              border="none"
              backColorHover="var(--brand1)"
              textColorHover="var(--brand4)"
            >
              Adicionar campo para imagem da galeria
            </Button>
          </ContainerImgs>

          <ContainerBtnCreated>
            <Button
              width="126px"
              backColor="var(--grey6)"
              backColorFocus="var(--grey6)"
              textColor="var(--grey2)"
              textColorFocus="var(--grey2)"
              backColorHover="var(--grey2)"
              textColorHover="var(--grey6)"
            >
              Cancelar
            </Button>
            <Button
              width="193px"
              backColor="var(--brand3)"
              backColorHover="var(--brand1)"
              textColor="var(--brand4)"
              textColorHover="var(--whiteFixed)"
            >
              Criar anúncio
            </Button>
          </ContainerBtnCreated>
        </VehicleInformation>
      </div>
    </ContainerCreatedAnnouncement>
  );
};

export default Announcement;
