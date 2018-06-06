/* eslint-disable */

import React from 'react';
import { Circle, G, Path, Polygon, Line } from 'react-native-svg';
import { colors } from '../../styles';

const iconFill = colors.icon;

export default {
  'logo': {
    svg: (
      <G id="perfi" >
        <G id="Group">
          <Path d="M16.767184,64.6127389 L0.0842572062,64.6127389 L0.0842572062,0 L32.5232816,0 C39.5166297,0 45.0354767,2.05987261 49.037694,6.13757962 C53.0399113,10.2573248 55.0620843,15.343949 55.0620843,21.4815287 C55.0620843,27.5350318 53.0399113,32.6216561 49.037694,36.7414013 C45.0354767,40.8611465 39.5166297,42.8789809 32.5232816,42.8789809 L16.767184,42.8789809 L16.767184,64.6127389 Z M30.2904656,28.3757962 C32.5654102,28.3757962 34.4190687,27.7452229 35.8935698,26.5261146 C37.368071,25.3070064 38.0842572,23.6254777 38.0842572,21.4815287 C38.0842572,19.2955414 37.368071,17.5719745 35.8935698,16.3528662 C34.4190687,15.133758 32.5654102,14.5031847 30.2904656,14.5031847 L16.8093126,14.5031847 L16.8093126,28.3757962 L30.2904656,28.3757962 Z" id="Shape" fill="#000000" />
          <Path d="M80.2971175,65.7898089 C72.924612,65.7898089 66.8159645,63.5617834 61.9290466,59.0636943 C57.0842572,54.5656051 54.6407982,48.5961783 54.6407982,41.1974522 C54.6407982,34.3031847 57,28.4598726 61.6762749,23.7515924 C66.3525499,19.0433121 72.3348115,16.689172 79.5809313,16.689172 C86.616408,16.689172 92.3880266,19.0433121 96.8536585,23.7936306 C101.31929,28.543949 103.552106,34.8496815 103.552106,42.7528662 L103.552106,45.9477707 L70.1441242,45.9477707 C70.6075388,48.2598726 71.8713969,50.2356688 73.9356984,51.8751592 C76,53.4726115 78.654102,54.3133758 81.8980044,54.3133758 C83.7095344,54.3133758 85.8159645,53.9350318 88.1751663,53.1783439 C90.5343681,52.4216561 92.345898,51.4968153 93.5676275,50.3197452 L99.886918,59.6101911 C97.6119734,61.6280255 94.7050998,63.1414013 91.2084257,64.1923567 C87.6696231,65.2433121 84.0465632,65.7898089 80.2971175,65.7898089 Z M89.3126386,36.2369427 C89.059867,34.1770701 88.1330377,32.3273885 86.5742794,30.6458599 C85.0155211,29.0063694 82.6984479,28.1656051 79.5809313,28.1656051 C76.6740576,28.1656051 74.4412417,28.9643312 72.8824834,30.6038217 C71.3237251,32.2012739 70.3547672,34.0929936 69.9756098,36.2369427 L89.3126386,36.2369427 Z" id="Shape" fill="#000000" />
          <Path d="M123.310421,64.6127389 L108.354767,64.6127389 L108.354767,17.8242038 L123.310421,17.8242038 L123.310421,23.5414013 C124.911308,21.6076433 127.101996,19.9681529 129.798226,18.5808917 C132.494457,17.1936306 135.232816,16.5630573 137.971175,16.5630573 L137.971175,30.8980892 C136.791574,30.6458599 135.569845,30.5197452 134.263858,30.5197452 C132.199557,30.5197452 130.050998,30.9401274 127.902439,31.7388535 C125.75388,32.5375796 124.195122,33.5464968 123.310421,34.8076433 L123.310421,64.6127389 Z" id="Shape" fill="#000000" />
          <Polygon id="Shape" fill="#27AE60" points="159.203991 64.6127389 142.521064 64.6127389 142.521064 0 190 0 190 14.5452229 159.203991 14.5452229 159.203991 24.6343949 189.325942 24.6343949 189.325942 39.1796178 159.203991 39.1796178" />
        </G>
        <Path d="M209.828947,12.7894737 C208.368421,14.25 206.592105,15 204.5,15 C202.407895,15 200.631579,14.25 199.171053,12.7894737 C197.710526,11.3289474 197,9.55263158 197,7.46052632 C197,5.36842105 197.710526,3.59210526 199.171053,2.17105263 C200.631579,0.75 202.407895,0 204.5,0 C206.592105,0 208.368421,0.710526316 209.828947,2.17105263 C211.289474,3.63157895 212,5.36842105 212,7.46052632 C212,9.55263158 211.289474,11.3289474 209.828947,12.7894737 Z" id="Shape" fill="#27AE60" />
        <Path d="M204.521127,21.7524932 C201.901408,21.7524932 199.661972,20.8766999 197.84507,19.0834089 C197.802817,19.0417044 197.760563,19 197.676056,19 L197.211268,19 C197.084507,19 197,19.0834089 197,19.2085222 L197,65 L212,65 L212,19.2085222 C212,19.0834089 211.915493,19 211.788732,19 L211.323944,19 C211.28169,19 211.197183,19.0417044 211.15493,19.0834089 C209.380282,20.8766999 207.140845,21.7524932 204.521127,21.7524932 Z" id="Shape" fill="#27AE60" />
      </G>
    ),
    viewBox: "0 0 212 66"
  },
  'apikoLogo': {
    svg: (
      <G>
        <Path fill="#FF9900" d="M133.8,207.9c-10.7,13.7-27.3,22.5-46,22.5h-0.2c-18.8,0-35.5-9-46.1-22.8l46.2-46L133.8,207.9z"/>
        <G>
        <Path fill="#333333" d="M415,40.1c-4.1-4.1-6.2-9.1-6.2-14.8s2.1-10.7,6.2-14.8c4.1-4.1,9.1-6.2,14.8-6.2c5.7,0,10.7,2.1,14.8,6.2
		c4.1,4.1,6.2,9.1,6.2,14.8s-2.1,10.7-6.2,14.8c-4.1,4.1-9.1,6.2-14.8,6.2C424.1,46.3,419.2,44.2,415,40.1z M418.2,244.6
		c-3.1-3.1-4.6-7-4.6-11.6V91c0-4.9,1.5-8.8,4.6-11.8c3.1-3,7-4.5,11.6-4.5c4.9,0,8.8,1.5,11.8,4.5c3,3,4.5,6.9,4.5,11.8v142
		c0,4.7-1.5,8.6-4.5,11.6c-3,3.1-6.9,4.6-11.8,4.6C425.2,249.2,421.3,247.7,418.2,244.6z"/>
        <Path fill="#333333" d="M622.9,235.8c0,4.7-1.9,8.6-5.7,11.8c-3.2,2.6-6.6,3.8-10.2,3.8c-4.7,0-8.5-1.9-11.5-5.7l-60.6-75l-16,14v48.8
		c0,4.7-1.4,8.5-4.3,11.3c-2.9,2.9-6.7,4.3-11.3,4.3c-4.7,0-8.5-1.4-11.3-4.3c-2.9-2.9-4.3-6.6-4.3-11.3v-218
		c0-4.7,1.4-8.5,4.3-11.3c2.9-2.9,6.6-4.3,11.3-4.3c4.7,0,8.5,1.4,11.3,4.3c2.9,2.9,4.3,6.7,4.3,11.3v129.9l77.5-69.2
		c2.8-2.8,6.1-4.1,9.9-4.1c4.5,0,8.1,1.7,10.9,5.1c2.8,2.8,4.1,6.1,4.1,9.9c0,4.5-1.7,8.1-5.1,10.9l-58.7,52.3l61.9,76
		C621.7,228.8,622.9,232,622.9,235.8z"/>
        <Path fill="#333333" d="M789.7,116.2c-7.6-13.4-18-23.9-31.3-31.4c-13.3-7.5-28.4-11.3-45.2-11.3c-17,0-32.2,3.8-45.6,11.3
		c-13.4,7.6-23.8,18-31.3,31.4c-7.4,13.4-11.2,28.7-11.2,46c0,17,3.7,32.2,11.2,45.6c7.4,13.4,17.9,23.9,31.3,31.4
		c13.4,7.6,28.6,11.3,45.6,11.3c17,0,32.2-3.8,45.5-11.3c13.3-7.5,23.7-18,31.1-31.4c7.4-13.4,11.2-28.6,11.2-45.6
		C801,144.9,797.2,129.6,789.7,116.2z M713.1,223.7c-34.1,0-61.8-27.6-61.8-61.8c0-34.1,27.6-61.8,61.8-61.8
		c34.1,0,61.8,27.6,61.8,61.8C774.8,196.1,747.2,223.7,713.1,223.7z"/>
        <Path fill="#333333" d="M369.7,116.2c-7.6-13.4-18-23.9-31.3-31.4c-13.3-7.5-28.4-11.3-45.2-11.3c-0.1,0-0.2,0-0.3,0l0,0
		c-1.9,0-3.9,0.1-5.7,0.2c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0-0.5,0c-14.3,0.9-27.3,4.6-38.8,11.1c-13.4,7.6-23.8,18-31.3,31.4
		c-7.4,13.4-11.2,28.7-11.2,46v145.5c0,4.9,1.5,8.8,4.6,11.8c3.1,3,7,4.5,11.6,4.5c4.9,0,8.8-1.5,11.8-4.5c3-3,4.5-6.9,4.5-11.8v-75
		c3.1,2.4,6.4,4.6,9.9,6.5c13.4,7.6,28.6,11.3,45.6,11.3c17,0,32.2-3.8,45.5-11.3c13.3-7.5,23.7-18,31.1-31.4
		c7.4-13.4,11.2-28.6,11.2-45.6C381,144.9,377.2,129.6,369.7,116.2z M293.1,223.7c-34.1,0-61.8-27.6-61.8-61.8
		c0-34.1,27.6-61.8,61.8-61.8c34.1,0,61.8,27.6,61.8,61.8C354.9,196.1,327.2,223.7,293.1,223.7z"/>
        <Path fill="#333333" d="M164.2,117c-7.8-13.5-18.3-24.1-31.6-31.9c-13.3-7.8-28.1-11.6-44.5-11.6c-16.4,0-31.3,3.9-44.8,11.6
		c-13.5,7.8-24.1,18.4-31.8,31.9C3.8,130.5,0,145.5,0,162.1c0,2,0.1,4.1,0.2,6.1c0,0,0,0.1,0,0.1c0.1,2,0.3,3.9,0.5,5.8
		c0,0.1,0,0.2,0,0.2c0.2,1.8,0.5,3.6,0.8,5.4c0,0.2,0.1,0.4,0.1,0.6c0.3,1.6,0.6,3.2,1,4.7c0.1,0.5,0.2,0.9,0.3,1.4
		c0.3,1.2,0.6,2.3,0.9,3.5c1.7,6,4,11.8,6.9,17.4l0.3,0.1c0.1,0.1,0.1,0.3,0.2,0.4c7.4,13.4,17.9,23.9,31.3,31.4
		c13.4,7.6,28.6,11.3,45.6,11.3c17,0,32.2-3.8,45.5-11.3c3.4-2,6.7-4.1,9.7-6.5v0.6c0,4.7,1.5,8.6,4.6,11.6c3.1,3.1,7,4.6,11.6,4.6
		c4.7,0,8.6-1.5,11.6-4.6c3.1-3.1,4.6-7,4.6-11.6v-71.2C175.8,145.5,172,130.5,164.2,117z M87.9,223.7c-34.1,0-61.8-27.6-61.8-61.8
		c0-34.1,27.6-61.8,61.8-61.8s61.8,27.6,61.8,61.8C149.7,196.1,122,223.7,87.9,223.7z"/>
      </G>
      </G>
    ),
    viewBox: "0 0 801 323.9"
  },
  'transfer': {
    svg: (
      <G>
        <G id="transfer">
          <G>
            <Polygon points="32,24 7.992,24 7.992,28 0,22 7.992,16 7.992,20 32,20"/>
            <Polygon points="0,12 24,12 24,16 32,10 24,4 24,8 0,8"/>
          </G>
        </G>
      </G>
    ),
    viewBox: "0 0 32 32"
  },
  'arrow_down': {
    svg: (
      <G id="down_arrow">
        <Polygon points="9.501,17.5 5.563,12.5 8.501,12.5 8.501,1.5 10.501,1.5 10.501,12.5 13.438,12.5 	"/>
      </G>
    ),
    viewBox: "0 0 19 19"
  },

  'shape': {
    svg: (
      <G fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
        <G id="Core">
          <G id="check">
            <Path d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z" id="Shape"/>
          </G>
        </G>
      </G>
    ),
    viewBox: "0 0 18 15"
  },

  'chart': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-13.000000, -313.000000)">
          <Path d="M17.3846034,325.644409 C17.5439867,325.644409 17.7044117,325.582947 17.826293,325.461066 L22.484869,320.80249 C22.6484192,320.63894 22.9130163,320.63894 23.0755248,320.80249 L24.6787333,322.405698 C25.306891,323.034898 26.4059066,323.034898 27.035106,322.405698 L31.3113704,318.128392 L31.3113704,320.135788 C31.3113704,320.48164 31.5915933,320.761863 31.9364029,320.761863 C32.2812126,320.761863 32.5603938,320.48164 32.5603938,320.135788 L32.5603938,316.61998 C32.5603938,316.538726 32.544768,316.458513 32.5124746,316.381426 C32.4489296,316.228293 32.32809,316.106412 32.1739153,316.043909 C32.0978697,316.011615 32.0176572,315.994948 31.9364029,315.994948 L28.4205948,315.994948 C28.0757852,315.994948 27.7955623,316.275171 27.7955623,316.61998 C27.7955623,316.965832 28.0757852,317.245013 28.4205948,317.245013 L30.427991,317.245013 L26.1517267,321.521277 C25.9892182,321.683786 25.7246211,321.683786 25.5621126,321.521277 L23.9589041,319.918069 C23.3088703,319.268035 22.2515235,319.268035 21.6025314,319.918069 L16.9429137,324.577686 C16.699151,324.821449 16.699151,325.217303 16.9429137,325.461066 C17.064795,325.582947 17.2252201,325.644409 17.3846034,325.644409 M33,330.292567 C33,330.638419 32.7208188,330.9176 32.3760092,330.9176 L14.6667535,330.9176 C13.7479556,330.9176 13,330.170686 13,329.250846 L13,313.625033 C13,313.280223 13.2802229,313 13.6250326,313 C13.9698422,313 14.2490234,313.280223 14.2490234,313.625033 L14.2490234,329.250846 C14.2490234,329.481067 14.4365332,329.667535 14.6667535,329.667535 L32.3760092,329.667535 C32.7208188,329.667535 33,329.947758 33,330.292567" id="Chart" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 18"
  },

  'home': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-23.000000, -107.000000)">
          <Path d="M39.3300394,122.949581 C39.3300394,123.880691 38.5262848,124.63822 37.5376288,124.63822 L35.4527723,124.63822 L35.4527723,119.506266 C35.4527723,119.194009 35.1999481,118.940241 34.886748,118.940241 L31.113252,118.940241 C30.8000519,118.940241 30.5472277,119.194009 30.5472277,119.506266 L30.5472277,124.63822 L28.1038891,124.63822 C27.1152331,124.63822 26.3114785,123.880691 26.3114785,122.949581 L26.3114785,115.322402 L32.7330252,108.899912 C32.8811349,108.752746 33.1198085,108.752746 33.2669748,108.899912 L39.3300394,114.96392 L39.3300394,122.949581 Z M31.6792764,124.600485 L34.3207236,124.600485 L34.3207236,120.07229 L31.6792764,120.07229 L31.6792764,124.600485 Z M42.8337303,116.866705 L34.066956,108.099931 C33.4971581,107.52919 32.5028419,107.52919 31.933044,108.099931 L23.1662697,116.866705 C22.9445768,117.088398 22.9445768,117.44688 23.1662697,117.66763 C23.3870192,117.888379 23.7455013,117.888379 23.9662508,117.66763 L25.1794297,116.454451 L25.1794297,122.949581 C25.1794297,124.505204 26.4916629,125.770269 28.1038891,125.770269 L37.5376288,125.770269 C39.1507983,125.770269 40.4620882,124.505204 40.4620882,122.949581 L40.4620882,116.095969 L42.0337492,117.66763 C42.144124,117.778005 42.2884602,117.833664 42.4337398,117.833664 C42.578076,117.833664 42.7233556,117.778005 42.8337303,117.66763 C43.0554232,117.44688 43.0554232,117.088398 42.8337303,116.866705 Z" id="Home" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 19"
  },
  'inbox': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-13.000000, -244.000000)">
          <Path d="M31.8688146,259.87056 C31.8688146,260.714939 31.1810463,261.400821 30.3376103,261.400821 L15.6623897,261.400821 C14.8189537,261.400821 14.1311854,260.714939 14.1311854,259.87056 L14.1311854,255.719421 L20.0663711,255.719421 C20.3314779,257.097788 21.5466296,258.141233 23.0004717,258.141233 C24.4543139,258.141233 25.6685221,257.097788 25.9336289,255.719421 L31.8688146,255.719421 L31.8688146,259.87056 Z M16.8350866,246.259541 C17.0171706,245.596302 17.6228596,245.132129 18.3125147,245.132129 L27.6874853,245.132129 C28.3771404,245.132129 28.9828294,245.596302 29.1696306,246.273692 L31.6735223,254.587292 L25.4213406,254.587292 C25.1090617,254.587292 24.8552762,254.840134 24.8552762,255.153356 C24.8552762,256.176046 24.0231615,257.009104 23.0004717,257.009104 C21.977782,257.009104 21.1447238,256.176046 21.1447238,255.153356 C21.1447238,254.840134 20.8909383,254.587292 20.5786594,254.587292 L14.3264777,254.587292 L16.8350866,246.259541 Z M32.9801877,255.053352 C32.976414,255.032596 32.9830181,255.010897 32.976414,254.990141 L30.2574178,245.962357 C29.9423086,244.806642 28.885655,244 27.6874853,244 L18.3125147,244 C17.114345,244 16.0576914,244.806642 15.7472994,245.948205 L13.023586,254.990141 C13.0179254,255.010897 13.023586,255.032596 13.0198123,255.053352 C13.0141516,255.087315 13,255.117506 13,255.153356 L13,259.87056 C13,261.338554 14.194396,262.53295 15.6623897,262.53295 L30.3376103,262.53295 C31.8065475,262.53295 33,261.338554 33,259.87056 L33,255.153356 C33,255.117506 32.9867918,255.087315 32.9801877,255.053352 Z" id="Inbox" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 19"
  },
  'settings': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-13.000000, -444.000000)">
          <Path d="M31.8688146,455.303363 C31.8688146,455.381669 31.805604,455.444879 31.7272985,455.444879 L30.8385773,455.444879 C30.2979858,455.444879 29.8121138,455.79867 29.6319166,456.326053 C29.5470069,456.571348 29.4498325,456.810982 29.3356762,457.042125 C29.0894382,457.545922 29.1818954,458.141233 29.5677626,458.525213 L30.1923204,459.145997 C30.2262843,459.179961 30.2338318,459.218642 30.2338318,459.246002 C30.2338318,459.273362 30.2272277,459.312986 30.1932638,459.34695 L28.3469503,461.19232 C28.312043,461.227228 28.2724185,461.234775 28.2460022,461.234775 C28.2195858,461.234775 28.1799613,461.227228 28.1459975,461.19232 L27.52427,460.567763 C27.1412331,460.181895 26.5449785,460.090382 26.0402377,460.33662 C25.8109817,460.449833 25.5722911,460.54795 25.3269966,460.630973 C24.7996132,460.812114 24.4448795,461.297986 24.4448795,461.839521 L24.4448795,462.727298 C24.4448795,462.805604 24.3807255,462.868815 24.3024199,462.868815 L21.6975801,462.868815 C21.6192745,462.868815 21.5551205,462.805604 21.5551205,462.727298 L21.5551205,461.839521 C21.5551205,461.297986 21.2003868,460.812114 20.67206,460.630973 C20.4277089,460.54795 20.1890183,460.449833 19.9588188,460.33662 C19.7710741,460.244162 19.5701212,460.199821 19.3719987,460.199821 C19.0399075,460.199821 18.7163074,460.326242 18.47573,460.567763 L17.854946,461.19232 C17.8200387,461.227228 17.7804142,461.234775 17.7539978,461.234775 C17.7275815,461.234775 17.687957,461.227228 17.6539931,461.193264 L15.808623,459.347894 C15.7727723,459.312986 15.7671117,459.273362 15.7671117,459.246002 C15.7671117,459.218642 15.7737157,459.179961 15.808623,459.145997 L16.4341243,458.525213 C16.8181046,458.141233 16.9115053,457.545922 16.6643238,457.042125 C16.5511109,456.810982 16.4529931,456.571348 16.3680834,456.326997 C16.1878862,455.799613 15.7029577,455.444879 15.1614227,455.444879 L14.273645,455.444879 C14.1953394,455.444879 14.1311854,455.381669 14.1311854,455.303363 L14.1311854,452.69758 C14.1311854,452.620218 14.1953394,452.556064 14.273645,452.556064 L15.1614227,452.556064 C15.7029577,452.556064 16.1878862,452.20133 16.3680834,451.67489 C16.4529931,451.429596 16.5511109,451.189962 16.6643238,450.959762 C16.9115053,450.455021 16.8181046,449.85971 16.4331808,449.476673 L15.808623,448.854946 C15.7737157,448.820982 15.7671117,448.782301 15.7671117,448.755885 C15.7671117,448.728525 15.7727723,448.6889 15.8076796,448.654937 L17.6539931,446.808623 C17.687957,446.773716 17.7275815,446.767112 17.7539978,446.767112 C17.7804142,446.767112 17.8200387,446.773716 17.854946,446.808623 L18.4766734,447.434124 C18.8597104,447.819048 19.454078,447.910562 19.9597623,447.664324 C20.1890183,447.551111 20.4277089,447.452993 20.6730034,447.36997 C21.2003868,447.18883 21.5551205,446.703901 21.5551205,446.162366 L21.5551205,445.273645 C21.5551205,445.196283 21.6192745,445.132129 21.6975801,445.132129 L24.3024199,445.132129 C24.3807255,445.132129 24.4448795,445.196283 24.4448795,445.273645 L24.4448795,446.162366 C24.4448795,446.703901 24.7996132,447.18883 25.32794,447.36997 C25.5722911,447.452993 25.8109817,447.551111 26.0411812,447.664324 C26.5440351,447.912449 27.1402896,447.818105 27.5252135,447.433181 L28.1459975,446.809566 C28.1799613,446.773716 28.2195858,446.767112 28.2460022,446.767112 C28.2724185,446.767112 28.312043,446.773716 28.3469503,446.808623 L30.1923204,448.653993 C30.2272277,448.6889 30.2338318,448.728525 30.2338318,448.755885 C30.2338318,448.782301 30.2262843,448.820982 30.1923204,448.855889 L29.5668192,449.476673 C29.1818954,449.85971 29.0894382,450.455021 29.3356762,450.959762 C29.4498325,451.189962 29.5470069,451.429596 29.6319166,451.673947 C29.8121138,452.20133 30.2970423,452.556064 30.8385773,452.556064 L31.7272985,452.556064 C31.805604,452.556064 31.8688146,452.620218 31.8688146,452.69758 L31.8688146,455.303363 Z M31.7272985,451.423935 L30.8385773,451.423935 C30.7678192,451.423935 30.7215906,451.363555 30.7027218,451.306005 C30.6027171,451.016369 30.4866739,450.733336 30.3536488,450.460682 C30.3272324,450.408793 30.3159111,450.329544 30.36497,450.278598 L30.9895278,449.658757 C31.2310486,449.419124 31.3650172,449.099297 31.3659607,448.758715 C31.3669041,448.417189 31.2348224,448.09642 30.9923581,447.853955 L29.1460446,446.006698 C28.9054672,445.767064 28.5865843,445.634983 28.2460022,445.634983 L28.2441153,445.634983 C27.9035332,445.634983 27.5837068,445.768951 27.342186,446.010472 L26.7223454,446.63503 C26.6713996,446.685976 26.5949809,446.675598 26.5402613,446.648238 C26.2666635,446.51427 25.9836313,446.397283 25.693995,446.298222 C25.6392754,446.280296 25.5760649,446.233124 25.5760649,446.162366 L25.5760649,445.273645 C25.5760649,444.571725 25.0052833,444 24.3024199,444 L21.6975801,444 C20.9956602,444 20.4239351,444.571725 20.4239351,445.273645 L20.4239351,446.162366 C20.4239351,446.233124 20.3607246,446.280296 20.3069484,446.298222 C20.0163687,446.397283 19.7342799,446.51427 19.4616255,446.648238 C19.4040757,446.674654 19.3267135,446.684089 19.278598,446.63503 L18.657814,446.010472 C18.4162932,445.768951 18.0964668,445.634983 17.7558847,445.634983 L17.7539978,445.634983 C17.4143592,445.634983 17.0945328,445.767064 16.8539554,446.007642 L15.0066984,447.854899 C14.7651776,448.09642 14.6330959,448.417189 14.6340393,448.758715 C14.6349828,449.099297 14.7689514,449.419124 15.0104722,449.657814 L15.6340865,450.278598 C15.6850323,450.329544 15.6727676,450.408793 15.6472947,450.460682 C15.5133261,450.733336 15.3972829,451.016369 15.2982216,451.306948 C15.2784094,451.363555 15.2321808,451.423935 15.1614227,451.423935 L14.273645,451.423935 C13.5707816,451.423935 13,451.99566 13,452.69758 L13,455.303363 C13,456.006227 13.5707816,456.577008 14.273645,456.577008 L15.1614227,456.577008 C15.2321808,456.577008 15.2784094,456.637389 15.2982216,456.694938 C15.3972829,456.985518 15.5133261,457.26855 15.6472947,457.540261 C15.6727676,457.593094 15.6850323,457.672343 15.63503,457.722345 L15.0104722,458.343129 C14.7689514,458.582763 14.6349828,458.901646 14.6340393,459.242228 C14.6330959,459.583754 14.7651776,459.904524 15.0076419,460.146988 L16.8539554,461.994245 C17.0945328,462.233879 17.4143592,462.365961 17.7539978,462.365961 L17.7558847,462.365961 C18.0964668,462.365961 18.4162932,462.231992 18.657814,461.990471 L19.2776546,461.365913 C19.3295438,461.315911 19.406906,461.326289 19.4606821,461.353649 C19.7342799,461.487617 20.0163687,461.603661 20.306005,461.702722 C20.3607246,461.721591 20.4239351,461.768763 20.4239351,461.839521 L20.4239351,462.727298 C20.4239351,463.430162 20.9956602,464.000943 21.6975801,464.000943 L24.3024199,464.000943 C25.0052833,464.000943 25.5760649,463.430162 25.5760649,462.727298 L25.5760649,461.839521 C25.5760649,461.768763 25.6392754,461.721591 25.6930516,461.702722 C25.9836313,461.603661 26.2666635,461.487617 26.5393179,461.353649 C26.5949809,461.325346 26.672343,461.315911 26.721402,461.365913 L27.342186,461.990471 C27.5837068,462.231992 27.9035332,462.365961 28.2441153,462.365961 L28.2460022,462.365961 C28.5865843,462.365961 28.9054672,462.233879 29.1460446,461.993302 L30.9933016,460.146045 C31.2348224,459.904524 31.3669041,459.583754 31.3659607,459.242228 C31.3650172,458.901646 31.2310486,458.582763 30.9895278,458.343129 L30.3659135,457.722345 C30.3159111,457.672343 30.3272324,457.593094 30.3536488,457.540261 C30.4866739,457.26855 30.6027171,456.985518 30.7027218,456.694938 C30.7215906,456.637389 30.7678192,456.577008 30.8385773,456.577008 L31.7272985,456.577008 C32.4292184,456.577008 33,456.006227 33,455.303363 L33,452.69758 C33,451.99566 32.4292184,451.423935 31.7272985,451.423935 Z M23.0004717,456.73645 C21.49191,456.73645 20.2635502,455.509033 20.2635502,454.000472 C20.2635502,452.49191 21.49191,451.264494 23.0004717,451.264494 C24.50809,451.264494 25.7364498,452.49191 25.7364498,454.000472 C25.7364498,455.509033 24.50809,456.73645 23.0004717,456.73645 Z M23.0004717,450.132365 C20.8673522,450.132365 19.1323647,451.867352 19.1323647,454.000472 C19.1323647,456.133591 20.8673522,457.868579 23.0004717,457.868579 C25.1326478,457.868579 26.8676353,456.133591 26.8676353,454.000472 C26.8676353,451.867352 25.1326478,450.132365 23.0004717,450.132365 Z" id="Settings" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 20"
  },
  'star': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-13.000000, -379.000000)">
          <Path d="M28.5123101,390.509998 C28.1906489,390.856185 28.0387796,391.324055 28.0944336,391.794756 L28.6575764,396.509308 C28.6877616,396.760223 28.5321191,396.901716 28.4642024,396.95171 C28.3962857,397.000761 28.2132878,397.10358 27.9850122,396.998875 L23.6751302,395.005708 C23.2459342,394.806674 22.7544812,394.806674 22.324342,395.005708 L18.01446,396.998875 C17.7842978,397.10358 17.6031865,397.000761 17.5352698,396.95171 C17.467353,396.901716 17.3126538,396.760223 17.3418958,396.509308 L17.9059819,391.793813 C17.9606926,391.324055 17.8088232,390.856185 17.4881054,390.509998 L14.2620611,387.027379 C14.0894394,386.841552 14.1318873,386.635915 14.1573561,386.555735 C14.1837682,386.476499 14.2696074,386.285012 14.5176921,386.235961 L19.1765906,385.315312 C19.6406882,385.223813 20.0387556,384.934224 20.2689179,384.522007 L22.5837462,380.375314 C22.7073169,380.155528 22.9157835,380.131945 22.9997361,380.131945 C23.0836887,380.131945 23.2930986,380.155528 23.4166693,380.375314 L25.7314976,384.522007 C25.9616598,384.934224 26.3597273,385.223813 26.8238249,385.315312 L31.4817801,386.236904 C31.7298648,386.285012 31.8166473,386.476499 31.842116,386.555735 C31.8685281,386.635915 31.9109761,386.841552 31.7383544,387.027379 L28.5123101,390.509998 Z M32.5693909,387.797102 C32.9712316,387.36319 33.1014053,386.767975 32.9193507,386.206719 C32.7372962,385.644519 32.2807449,385.240792 31.7015662,385.125711 L27.0426676,384.205062 C26.9058909,384.177707 26.7879799,384.091868 26.7191199,383.970183 L24.4042916,379.82349 C24.1156456,379.307512 23.5902342,379 22.9997361,379 C22.4092379,379 21.8847699,379.307512 21.5961238,379.82349 L19.2812955,383.970183 C19.2124355,384.091868 19.0945245,384.177707 18.9568045,384.205062 L14.2988493,385.125711 C13.7187273,385.240792 13.2631193,385.644519 13.0810647,386.206719 C12.8980669,386.767975 13.0291839,387.36319 13.4310245,387.797102 L16.6589554,391.279721 C16.7532842,391.382539 16.798562,391.521202 16.7815828,391.659866 L16.21844,396.375362 C16.1486367,396.962087 16.3910617,397.520513 16.8702519,397.867643 C17.1532382,398.07328 17.4805591,398.177041 17.8107098,398.177041 C18.0399288,398.177041 18.2710343,398.127047 18.489877,398.026115 L22.7997591,396.032005 C22.9271029,395.973521 23.0723692,395.973521 23.1997131,396.032005 L27.5105384,398.026115 C28.0453826,398.273257 28.6500301,398.214773 29.1292203,397.867643 C29.6084105,397.520513 29.8517788,396.962087 29.7819755,396.375362 L29.2178893,391.660809 C29.2009102,391.521202 29.246188,391.382539 29.3424033,391.279721 L32.5693909,387.797102 Z" id="Star" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 20"
  },

  'wallet': {
    svg: (
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Hamburger" transform="translate(-13.000000, -176.000000)">
          <Path d="M31.8688146,184.354532 L26.9289589,184.354532 C25.5647436,184.354532 24.4562008,185.464018 24.4562008,186.828233 L24.4562008,188.416987 C24.4562008,189.780259 25.5647436,190.890689 26.9289589,190.890689 L31.8688146,190.890689 L31.8688146,191.167117 C31.8688146,193.208723 30.1809991,194.869178 28.1082598,194.869178 L17.8926836,194.869178 C15.8190009,194.869178 14.1311854,193.208723 14.1311854,191.167117 L14.1311854,184.078103 C14.1311854,182.036498 15.8190009,180.376042 17.8926836,180.376042 L28.1082598,180.376042 C30.1809991,180.376042 31.8688146,182.036498 31.8688146,184.078103 L31.8688146,184.354532 Z M31.8688146,189.75856 L26.9289589,189.75856 C26.1893014,189.75856 25.5873862,189.156645 25.5873862,188.416987 L25.5873862,186.828233 C25.5873862,186.088576 26.1893014,185.48666 26.9289589,185.48666 L31.8688146,185.48666 L31.8688146,189.75856 Z M26.0534459,177.180608 C26.2194915,177.114567 26.4006321,177.116454 26.5666777,177.188156 C26.7327232,177.259857 26.8600877,177.393826 26.9289589,177.572136 L27.6044625,179.243913 L21.0173593,179.243913 L26.0534459,177.180608 Z M28.8564083,179.318445 L27.9827822,177.156079 C27.8054153,176.700397 27.4629464,176.342833 27.0166989,176.149427 C26.5713949,175.956022 26.0789188,175.950362 25.6270107,176.132446 L18.0294825,179.243913 L17.8926836,179.243913 C15.1944431,179.243913 13,181.41194 13,184.078103 L13,191.167117 C13,193.832337 15.1944431,196.001307 17.8926836,196.001307 L28.1082598,196.001307 C30.8055569,196.001307 33,193.832337 33,191.167117 L33,184.078103 C33,181.665725 31.1970848,179.676952 28.8564083,179.318445 Z" id="Wallet" />
        </G>
      </G>
    ),
    viewBox: "0 0 20 20"
  },

};
