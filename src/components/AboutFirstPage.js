import { motion } from "framer-motion";
import { titleAnim, container } from "./../animation";

function firstPage() {
  return (
    <section className="landing l-res">
      <div className="text-wrapper">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="first-line"
          >
            <span className="line-span">Lighthouse VPN</span>
          </motion.h1>
          <motion.h2
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="second-line"
          >
            <span className="line-span">
              Fast, <span className="color">Secure</span> and Cheap
            </span>
          </motion.h2>
          <motion.h3
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="third-line"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.h3>
          <div className="btn-wrapper">
            <a className="btn" href="/prices">
              <span>
                Try it now
                <img
                  className="right-arrow"
                  src="../icon/right-arrow.svg"
                  alt=""
                />
              </span>
            </a>
          </div>
        </motion.div>
        <div className="icons-wrapper">
          <img src="../icon/windows-logo.svg" alt="windows-logo" />
          <img src="../icon/linux-logo.svg" alt="linux-logo" />
          <img src="../icon/android-logo.svg" alt="android-logo" />
          <img src="../icon/apple-logo.svg" alt="apple-logo" />
        </div>
      </div>
      <div className="img-wrapper">
        <svg
          width="992"
          height="696"
          viewBox="0 0 992 696"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="lighthouse">
            <g id="Light">
              <path
                id="Vector"
                opacity="0.2"
                d="M596.953 164.337L0 57V305.456L597.991 195.384L596.953 164.337Z"
                fill="url(#paint0_linear)"
              />
              <path
                id="Vector_2"
                opacity="0.3"
                d="M596.951 168.69L0.816093 96.233V262.275L596.951 189.394V168.69Z"
                fill="url(#paint1_linear)"
              />
              <path
                id="Vector_3"
                opacity="0.3"
                d="M596.953 173.043L0.816093 127.28V231.902L597.731 185.042L596.953 173.043Z"
                fill="url(#paint2_linear)"
              />
            </g>
            <g id="Building">
              <path
                id="Vector_4"
                opacity="0.6"
                d="M734.661 233.283C701.571 299.525 613.08 329.847 537.047 301.017C461.015 272.188 426.211 195.124 459.337 128.882C492.427 62.64 580.882 32.3179 656.915 61.147C732.947 89.976 767.751 167.072 734.661 233.283Z"
                fill="url(#paint3_radial)"
              />
              <path
                id="Vector_5"
                d="M561.394 259.158L543.867 455.053H651.848L636.106 259.158H561.394Z"
                fill="#083345"
              />
              <path
                id="Vector_6"
                d="M639.638 304.532H557.465L551.682 368.597H644.85L639.638 304.532Z"
                fill="url(#paint4_linear)"
              />
              <path
                id="Vector_7"
                d="M543.867 455.053H651.848L647.6 402.682H548.615L543.867 455.053Z"
                fill="url(#paint5_linear)"
              />
              <path
                id="Vector_8"
                d="M606.857 311.125H592.258V338.586H606.857V311.125Z"
                fill="black"
              />
              <path
                id="Vector_9"
                d="M608.084 339.612H591.128V310.099H608.084V339.612ZM593.52 337.559H605.764V312.151H593.52V337.559Z"
                fill="white"
              />
              <path
                id="Vector_10"
                d="M606.857 389.247H592.258V416.708H606.857V389.247Z"
                fill="black"
              />
              <path
                id="Vector_11"
                d="M608.084 417.734H591.128V388.22H608.084V417.734ZM593.52 415.681H605.764V390.273H593.52V415.681Z"
                fill="white"
              />
              <path
                id="Vector_12"
                d="M638.067 205.418H561.927V214.499H638.067V205.418Z"
                fill="url(#paint6_linear)"
              />
              <path
                id="Vector_13"
                d="M638.067 152.393H561.927V205.387H638.067V152.393Z"
                fill="url(#paint7_radial)"
              />
              <path
                id="Vector_14"
                d="M638.355 177.521H626.861V152.331H624.505V177.521H576.637V152.331H574.281V177.521H561.895V179.574H574.281V204.827H576.637V179.574H624.505V204.827H626.861V179.574H638.355V177.521Z"
                fill="#03404E"
              />
              <path
                id="Vector_15"
                d="M638.103 152.486C638.067 134.2 621.076 119.365 600.087 119.365C579.097 119.365 562.07 134.2 562.07 152.486H638.103Z"
                fill="#03404E"
              />
              <path
                id="Vector_16"
                opacity="0.5"
                d="M600.873 119.397C598.803 119.397 596.768 119.583 594.769 119.863C612.867 122.413 626.682 136.035 626.682 152.517H638.89C638.89 134.2 621.899 119.397 600.873 119.397Z"
                fill="url(#paint8_linear)"
              />
              <path
                id="Vector_17"
                d="M600.052 119.956C602.831 119.956 605.085 117.993 605.085 115.571C605.085 113.15 602.831 111.186 600.052 111.186C597.272 111.186 595.018 113.15 595.018 115.571C595.018 117.993 597.272 119.956 600.052 119.956Z"
                fill="#03404E"
              />
              <path
                id="Vector_18"
                d="M599.98 113.27C599.338 113.27 598.802 112.803 598.802 112.244V88.795C598.802 88.235 599.338 87.768 599.98 87.768C600.623 87.768 601.158 88.235 601.158 88.795V112.244C601.158 112.803 600.623 113.27 599.98 113.27Z"
                fill="#03404E"
              />
              <path
                id="Vector_19"
                d="M672.585 464.57H528.088V526.706H672.585V464.57Z"
                fill="black"
              />
              <path
                id="Vector_20"
                d="M640.245 243.95H558.715C556.466 243.95 554.681 245.536 554.681 247.464V255.581C554.681 257.54 556.502 259.095 558.715 259.095H640.245C642.494 259.095 644.279 257.509 644.279 255.581V247.464C644.279 245.536 642.494 243.95 640.245 243.95Z"
                fill="#03404E"
              />
              <path
                id="Vector_21"
                d="M650.311 218.915C650.311 216.427 647.991 214.437 645.171 214.437H553.146C550.291 214.437 548.006 216.458 548.006 218.915V232.972H650.347H650.383V228.431L650.311 218.915ZM635.497 216.489V228.431H627.359V216.489H635.497ZM625.003 216.489V228.431H616.864V216.489H625.003ZM614.508 216.489V228.431H606.369V216.489H614.508ZM603.978 216.489V228.431H595.839V216.489H603.978ZM593.483 216.489V228.431H585.344V216.489H593.483ZM582.988 216.489V228.431H574.85V216.489H582.988ZM572.494 216.489V228.431H564.355V216.489H572.494ZM550.326 218.915C550.326 217.578 551.576 216.489 553.111 216.489H561.963V228.431H550.326V218.915ZM637.853 228.431V216.489H645.135C646.67 216.489 647.92 217.578 647.92 218.915V228.4H637.853V228.431Z"
                fill="white"
              />
              <path
                id="Vector_22"
                d="M650.384 232.972H547.972C547.901 233.252 547.901 243.203 547.901 243.203C547.901 245.412 549.935 247.184 552.47 247.184H645.851C648.385 247.184 650.42 245.412 650.42 243.203C650.42 243.203 650.455 233.252 650.384 232.972Z"
                fill="url(#paint9_linear)"
              />
              <path
                id="Vector_23"
                d="M672.685 448.46C672.685 445.972 670.365 443.982 667.545 443.982H625.388H575.521H533.364C530.508 443.982 528.223 446.003 528.223 448.46V454.68H528.116V465.223H672.614V457.852H672.721V448.46H672.685ZM667.509 446.034C669.044 446.034 670.293 447.123 670.293 448.46V454.68H660.227V446.034H667.509ZM657.871 446.034V454.68H649.733V446.034H657.871ZM647.377 446.034V454.68H639.238V446.034H647.377ZM636.882 446.034V454.68H628.743V446.034H636.882ZM625.352 446.034H626.352V454.68H618.213V446.034H625.352ZM615.714 446.034V454.68H607.718V446.034H615.714ZM605.184 446.034V454.68H597.188V446.034H605.184ZM594.689 446.034V454.68H586.693V446.034H594.689ZM584.195 446.034V454.68H576.056V446.034H584.195ZM573.7 446.034V454.68H565.561V446.034H573.7ZM563.17 446.034V454.68H555.031V446.034H563.17ZM552.675 446.034V454.68H544.536V446.034H552.675ZM530.544 448.46C530.544 447.123 531.793 446.034 533.328 446.034H542.181V454.68H530.544V448.46Z"
                fill="black"
              />
              <path
                id="Vector_24"
                d="M796.808 526.737C767.787 492.061 669.908 474.366 600.372 474.366C531.907 474.366 433.279 492.061 404.008 526.737H796.808Z"
                fill="#09080E"
                fillOpacity="0.67"
              />
              <g id="Vector_25">
                <path
                  d="M793.325 524H406.71L214 693H986L793.325 524Z"
                  fill="#060509"
                />
                <path
                  d="M793.325 524H406.71L214 693H986L793.325 524Z"
                  fill="url(#paint10_linear)"
                  fillOpacity="0.4"
                />
              </g>
              <path
                id="Vector_26"
                opacity="0.3"
                d="M782.066 240.933C738.516 328.074 622.111 368.006 522.055 330.033C422.035 292.092 376.237 190.677 419.786 103.505C463.335 16.364 579.74 -23.5678 679.796 14.3736C779.852 52.346 825.615 153.761 782.066 240.933Z"
                fill="url(#paint11_radial)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0.0178084"
              y1="181.225"
              x2="598"
              y2="181.225"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="0.808302"
              y1="179.252"
              x2="596.95"
              y2="179.252"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="0.808302"
              y1="179.59"
              x2="597.737"
              y2="179.59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <radialGradient
              id="paint3_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(596.992 181.087) rotate(-3.18784) scale(150.1 130.9)"
            >
              <stop offset="0.3383" stopColor="white" stopOpacity="0.96" />
              <stop offset="0.9512" stopColor="#F7FCFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint4_linear"
              x1="551.687"
              y1="336.56"
              x2="644.843"
              y2="336.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#C1CAC7" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="543.876"
              y1="428.859"
              x2="651.859"
              y2="428.859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#C1CAC7" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="561.928"
              y1="209.94"
              x2="638.068"
              y2="209.94"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#67C1BE" />
              <stop offset="0.3288" stopColor="#3C8C94" />
              <stop offset="0.6303" stopColor="#226775" />
              <stop offset="0.8635" stopColor="#155364" />
              <stop offset="1" stopColor="#104C5E" />
            </linearGradient>
            <radialGradient
              id="paint7_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(599.998 178.868) scale(34.4518 30.015)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.8" />
            </radialGradient>
            <linearGradient
              id="paint8_linear"
              x1="594.784"
              y1="135.944"
              x2="638.921"
              y2="135.944"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#53BFCC" />
              <stop offset="0.1166" stopColor="#49B6C6" />
              <stop offset="0.4697" stopColor="#2C9FB6" />
              <stop offset="0.7763" stopColor="#1792AC" />
              <stop offset="1" stopColor="#0C8DA9" />
            </linearGradient>
            <linearGradient
              id="paint9_linear"
              x1="547.895"
              y1="240.085"
              x2="650.425"
              y2="240.085"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#67C1BE" />
              <stop offset="0.027" stopColor="#62BBBA" />
              <stop offset="0.2563" stopColor="#3E8E96" />
              <stop offset="0.4751" stopColor="#286F7C" />
              <stop offset="0.678" stopColor="#1A5B6B" />
              <stop offset="0.859" stopColor="#135062" />
              <stop offset="1" stopColor="#104C5E" />
            </linearGradient>
            <linearGradient
              id="paint10_linear"
              x1="600"
              y1="524"
              x2="600"
              y2="693"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#060509" />
              <stop offset="1" />
            </linearGradient>
            <radialGradient
              id="paint11_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(600.933 172.22) rotate(-3.18784) scale(197.508 172.244)"
            >
              <stop stopColor="white" stopOpacity="0.96" />
              <stop offset="0.5971" stopColor="#FCFEFF" stopOpacity="0.3574" />
              <stop offset="0.9512" stopColor="#F7FCFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default firstPage;
