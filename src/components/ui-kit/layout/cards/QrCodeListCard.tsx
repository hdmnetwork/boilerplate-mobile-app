import { router } from 'expo-router';
import { Image } from "react-native";
import { QrcodeTypes } from "../../../../constants/qrcode-types";
import { QrCode, QrCodeType } from '../../../../graphql';
import UiText from "../../typography/UiText";
import PressableHStack from "../flex/PressableHStack";
import VStack from "../flex/VStack";

interface Props {
  qrCode: QrCode;
}

const QrCodeListCard = ({ qrCode }: Props) => (
  <PressableHStack
    gap={10}
    style={{
      backgroundColor: "#fafafa",
      padding: 10,
      width: "90%",
      alignSelf: "center",
      borderRadius: 10,
      marginBottom: 15,
    }}
    onPress={() => router.push(`/online/qr-codes/${qrCode.id}`)}
  >
    <Image
      source={QrcodeTypes[qrCode.type].image}
      style={{ width: 50, height: 50, alignSelf: "center" }}
    />
    <VStack>
      <UiText fontSize={20}>{QrcodeTypes[qrCode.type].title}</UiText>
      <UiText fontSize={12} color="#F15A5B">
        { qrCode.type === QrCodeType.CallPhone && qrCode.data.phone }
        { qrCode.type === QrCodeType.SendMail && qrCode.data.email }
        { qrCode.type === QrCodeType.ConnectLinkedin && qrCode.data.url }
        { qrCode.type === QrCodeType.ConnectFacebook && qrCode.data.url }
        { qrCode.type === QrCodeType.CollectGoogleReviews && qrCode.data.url }
        { qrCode.type === QrCodeType.BrowseUrl && qrCode.data.url }
      </UiText>
    </VStack>
  </PressableHStack>
);

export default QrCodeListCard;
