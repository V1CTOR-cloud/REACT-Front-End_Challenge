import React from 'react'

export const BlobMain = ({ type, color }) => {

  switch (type) {
    case 1:
      return (
        <div className="blobMain1">
          <svg viewBox="0 0 315 315" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.5,292.0844548168551C187.88426238691497,298.06848753340273,220.87417812998657,297.18997915075266,247.49425215168898,281.36646160790866C275.3630897993793,264.80065337396536,303.80455814854304,237.48631178854745,303.89244132658376,205.06578756662717C303.9805757321854,172.55258429730367,259.5177134954035,158.49465274631766,247.90965023579136,128.12412390886337C237.35759658868153,100.5164651274947,261.31220045039765,63.808947757598176,241.51436926341154,41.86414108605132C222.02127747584402,20.25712127319027,186.58113421594948,28.973751210994823,157.5,27.91000060778221C127.13314721206713,26.79922006769184,90.58199470798665,14.261757221181274,68.89818400929434,35.550062349478985C46.86905419760654,57.17738808380536,68.08284788393597,95.98772658325308,58.32499397170824,125.27608716739077C48.43640456217029,154.95685251806935,4.892682498431886,174.2617709799312,12.580995538296945,204.58703890807175C20.13578625975553,234.3856503305435,63.71959153772608,234.4667220195045,90.03625761126479,250.35587531117983C113.2402443299343,264.3656933071477,130.90550879303865,286.8467991043067,157.5,292.0844548168551" fill={color} />
          </svg>
        </div>
      );

    case 2:
      return (
        <div className="blobMain2">
          <svg viewBox="0 0 315 315" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.5,262.5834334267796C183.67593708314016,259.43416342886064,211.69818881389014,276.66113005747695,234.65062247959185,263.68872193400705C258.2132673712197,250.3714305977359,269.8845935147789,222.32361139439382,275.55717244647576,195.85910060942473C280.85844227857416,171.1268731102769,276.6927237416722,144.97856149370662,264.8911204380118,122.60650976916976C254.27893661655125,102.48921559691341,229.97565545508252,95.85455541424793,214.17357895116433,79.49551056322179C193.147317073723,57.72814593761733,187.66590800170655,13.867404964001585,157.50000000000003,11.430225094698153C128.07099947855977,9.052581841244056,114.02450764481361,48.2960903976779,93.75812989711464,69.76684241336658C77.84732773314875,86.62317914438309,59.04220326234737,101.13702071583816,51.984702972039756,123.21600174175026C44.94829640852347,145.2289922647316,53.13140188114947,167.7511254142235,55.076738755466515,190.77933493075741C57.77583724844417,222.73030775332893,39.31426510278426,265.6246327888599,65.5697615758084,284.0311181116616C91.98158226089964,302.54719493725463,125.47525716541304,266.4363828543283,157.5,262.5834334267796" fill={color} />
          </svg>
        </div>
      );

    case 3:
      return (
        <div className="blobMain3">
          <svg viewBox="0 0 315 315" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.5,283.0831420868772C184.00593163599888,285.87914022844666,213.97681898237107,279.69251326867374,232.03658389296007,260.0908064839531C249.41821958397287,241.22512755951152,236.58095894812598,210.07022453771629,246.547134189147,186.43316779114846C258.13633904154784,158.94672629087506,297.3114255035535,142.79571832960693,293.99119450660527,113.1513225424473C290.7587095648612,84.29035983317453,255.4433055678969,72.09992002358649,231.84562631571512,55.17202407294383C208.41470542580862,38.363752945375,185.85025007456537,9.967220727291132,157.5,15.238781478769578C128.71429484841684,20.591312517529474,124.95095365656083,62.9022783661693,100.85122840104933,79.52965495430338C75.65073738448703,96.916494426361,35.07369710007376,87.00863942246828,17.321856750412994,111.95336027685134C-1.125950397074547,137.8760471986252,-4.141667716547095,177.26488506282868,11.63597876772878,204.8940934700997C27.130238927522075,232.02704663254048,66.03671867419057,230.72340478563166,93.57508916923088,245.48509153520249C115.90947279777981,257.45722964441853,132.29900831693007,280.42479651807355,157.5,283.0831420868772" fill={color} />
          </svg>
        </div>
      );

    default:
      break;
  }

}