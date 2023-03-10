import { useContext } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ThemesContext } from "../../contexts/Themes";

import {
  ContainerAgeKmPrice,
  ContainerBtnCreated,
  ContainerCreatedAnnouncement,
  ContainerDesc,
  ContainerImgs,
  HeaderAnnouncement,
  TypeAnnouncement,
  TypeOfVehicle,
  VehicleInformation,
} from "./styles";

const CreateAnnouncement = () => {
  const {
    typeAnnoun,
    typeVehicle,
    imgsGalery,
    infoVeicle,
    desVeicle,
    kmVeicle,
    yearVeicle,
    priceVeicle,
    coverVeicle,

    setTypeAnnoun,
    setTypeVehicle,
    newImage,
    announcementCreate,
    setInfoVeicle,
    setDesVeicle,
    setKmVeicle,
    setYearVeicle,
    setPriceVeicle,
    editImg,
    setCoverVeicle,
  } = useContext(ThemesContext);

  const { openAndClosedModalCreateAnnou } = useContext(AnnouncementContext);

  return (
    <ContainerCreatedAnnouncement>
      <div className="mainAnnouncement">
        <HeaderAnnouncement>
          <h1>Criar anuncio</h1>
          <Button
            onClick={openAndClosedModalCreateAnnou}
            width="12px"
            height="12px"
            border="none"
            textColor="#ADB5BD"
          >
            X
          </Button>
        </HeaderAnnouncement>

        <TypeAnnouncement>
          <label>Tipo de anuncio</label>
          <div className="buttonsTypeAnnouncement">
            <Button
              width="228px"
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
              width="228px"
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
            value={infoVeicle}
            onChange={(e) => setInfoVeicle(e.target.value)}
          />

          <ContainerAgeKmPrice>
            <div>
              <label htmlFor="ageAnnouncement">Ano</label>
              <Input
                type="number"
                id="ageAnnouncement"
                placeholder="Digitar ano"
                value={yearVeicle}
                onChange={(e) => setYearVeicle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="kmAnnouncement">Kilometragem</label>
              <Input
                type="number"
                id="kmAnnouncement"
                placeholder="0"
                value={kmVeicle}
                onChange={(e) => setKmVeicle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="priceAnnouncement">Preço</label>
              <Input
                type="number"
                id="priceAnnouncement"
                placeholder="Digitar preço"
                value={priceVeicle}
                onChange={(e) => setPriceVeicle(e.target.value)}
              />
            </div>
          </ContainerAgeKmPrice>

          <ContainerDesc>
            <label htmlFor="descAnnouncement">Descrição</label>
            <textarea
              name="descAnnouncement"
              id="descAnnouncement"
              placeholder="Digitar descrição"
              value={desVeicle}
              onChange={(e) => setDesVeicle(e.target.value)}
            />
          </ContainerDesc>

          <TypeOfVehicle>
            <label htmlFor="btnCar">Tipo de veículo</label>
            <div>
              <Button
                width="228px"
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
                width="228px"
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
              <Input
                id="urlImgCover"
                placeholder="Inserir URL da imagem"
                value={coverVeicle}
                onChange={(e) => setCoverVeicle(e.target.value)}
              />
            </div>
            <div id="qtsImgAdd">
              <ul>
                {imgsGalery.map((ele, i) => (
                  <li key={i}>
                    <label htmlFor="urlImg1">{i + 1}° Imagem da galeria</label>
                    <Input
                      type="text"
                      value={ele.image}
                      onChange={(e) => editImg(i, e)}
                      placeholder="Inserir URL da imagem"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => newImage()}
              className="addImgInGalery"
              width="335px"
              height="38px"
              backColor="var(--brand4)"
              textColor="var(--brand1)"
              border="none"
            >
              Adicionar campo para imagem da galeria
            </Button>
          </ContainerImgs>

          <ContainerBtnCreated>
            <Button
              width="126px"
              backColor="var(--grey6)"
              textColor="var(--grey2)"
            >
              Cancelar
            </Button>
            <Button
              onClick={announcementCreate}
              width="193px"
              backColor="var(--brand3)"
              textColor="var(--brand4)"
            >
              Criar anúncio
            </Button>
          </ContainerBtnCreated>
        </VehicleInformation>
      </div>
    </ContainerCreatedAnnouncement>
  );
};

export default CreateAnnouncement;
