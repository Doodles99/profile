import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { IconChevron_leftIcon } from './IconChevron_leftIcon.js';
import { IconChevron_rightIcon2 } from './IconChevron_rightIcon2.js';
import { IconChevron_rightIcon3 } from './IconChevron_rightIcon3.js';
import { IconChevron_rightIcon4 } from './IconChevron_rightIcon4.js';
import { IconChevron_rightIcon5 } from './IconChevron_rightIcon5.js';
import { IconChevron_rightIcon6 } from './IconChevron_rightIcon6.js';
import { IconChevron_rightIcon7 } from './IconChevron_rightIcon7.js';
import { IconChevron_rightIcon8 } from './IconChevron_rightIcon8.js';
import { IconChevron_rightIcon } from './IconChevron_rightIcon.js';
import classes from './Profile.module.css';
import { RightSideIcon } from './RightSideIcon.js';
import { TimeIcon } from './TimeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 9:1878 */
export const Profile: FC<Props> = memo(function Profile(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.card}>
        <div className={classes.unnamed}>
          <p className={classes.labelWrapper}>두들스 님은</p>
        </div>
        <div className={classes.unnamed2}>
          <p className={classes.labelWrapper2}>환경은 나의 절친</p>
        </div>
        <div className={classes.unnamed3}>
          <p className={classes.labelWrapper3}>나무심기 장인</p>
        </div>
        <div className={classes.unnamed4}>
          <p className={classes.labelWrapper4}>자연의 수호자</p>
        </div>
        <div className={classes.unnamed5}>
          <p className={classes.labelWrapper5}>환경과 친해지는 중</p>
        </div>
        <div className={classes.unnamed6}>
          <p className={classes.labelWrapper6}>초록의 시작</p>
        </div>
        <div className={classes.action}></div>
        <div className={classes.unnamed7}>
          <p className={classes.labelWrapper7}>등급입니다.</p>
        </div>
        <div className={classes.unnamed8}>* 등급제도란? 내가 적립한 금액에 따라 혜택과 등급이 지정됩니다 </div>
        <div className={classes.progressbar}>
          <div className={classes.value}>
            <div className={classes._23}>
              <p className={classes.labelWrapper8}>다음 등급까지 23 % 남았어요!</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.information}>
        <div className={classes.name}>
          <div className={classes.unnamed9}>이름</div>
          <div className={classes.info}>
            <div className={classes.unnamed10}>임종민</div>
            <div className={classes.iconChevron_Right}>
              <IconChevron_rightIcon className={classes.icon} />
            </div>
          </div>
        </div>
        <div className={classes.username}></div>
      </div>
      <div className={classes.information2}>
        <div className={classes.name2}>
          <div className={classes.iDEmail}>ID (email)</div>
          <div className={classes.info2}>
            <div className={classes._201911788KyonggiAcKr}>201911788@kyonggi.ac.kr</div>
            <div className={classes.iconChevron_Right2}>
              <IconChevron_rightIcon2 className={classes.icon2} />
            </div>
          </div>
        </div>
        <div className={classes.username2}></div>
      </div>
      <div className={classes.information3}>
        <div className={classes.name3}>
          <div className={classes.unnamed11}>닉네임</div>
          <div className={classes.info3}>
            <div className={classes.unnamed12}>두들스</div>
            <div className={classes.iconChevron_Right3}>
              <IconChevron_rightIcon3 className={classes.icon3} />
            </div>
          </div>
        </div>
        <div className={classes.username3}></div>
      </div>
      <div className={classes.information4}>
        <div className={classes.name4}>
          <div className={classes.unnamed13}>회원 번호</div>
          <div className={classes.info4}>
            <div className={classes._1000296554}>1000296554</div>
            <div className={classes.iconChevron_Right4}>
              <IconChevron_rightIcon4 className={classes.icon4} />
            </div>
          </div>
        </div>
        <div className={classes.username4}></div>
      </div>
      <div className={classes.information5}>
        <div className={classes.name5}>
          <div className={classes.unnamed14}>연락처</div>
          <div className={classes.info5}>
            <div className={classes._1012345678}>010-1234-5678</div>
            <div className={classes.iconChevron_Right5}>
              <IconChevron_rightIcon5 className={classes.icon5} />
            </div>
          </div>
        </div>
        <div className={classes.username5}></div>
      </div>
      <div className={classes.information6}>
        <div className={classes.name6}>
          <div className={classes.unnamed15}>보유한 교환권</div>
          <div className={classes.info6}>
            <div className={classes._5}>5개</div>
            <div className={classes._52}> 5개</div>
            <div className={classes.iconChevron_Right6}>
              <IconChevron_rightIcon6 className={classes.icon6} />
            </div>
          </div>
          <button className={classes.button}>
            <div className={classes.unnamed16}>확인하기</div>
          </button>
        </div>
        <div className={classes.username6}></div>
      </div>
      <div className={classes.information7}>
        <div className={classes.name7}>
          <div className={classes.unnamed17}>로그아웃</div>
          <div className={classes.info7}>
            <div className={classes.iconChevron_Right7}>
              <IconChevron_rightIcon7 className={classes.icon7} />
            </div>
          </div>
        </div>
        <div className={classes.username7}></div>
      </div>
      <div className={classes.information8}>
        <div className={classes.name8}>
          <div className={classes.unnamed18}>회원탈퇴</div>
          <div className={classes.info8}>
            <div className={classes.iconChevron_Right8}>
              <IconChevron_rightIcon8 className={classes.icon8} />
            </div>
          </div>
        </div>
        <div className={classes.username8}></div>
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <div className={classes.rectangle1}></div>
        </div>
        <div className={classes.action2}>
          <div className={classes.unnamed19}>
            <p className={classes.labelWrapper9}>안녕하세요, 두들스님!</p>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.iconChevron_Left}>
          <IconChevron_leftIcon className={classes.icon9} />
        </div>
        <div className={classes.unnamed20}>내 정보</div>
      </div>
      <div className={classes.statusBarIPhoneXOrNewer}>
        <div className={classes.rightSide}>
          <RightSideIcon className={classes.icon10} />
        </div>
        <div className={classes.time}>
          <TimeIcon className={classes.icon11} />
        </div>
      </div>
      <div className={classes.line13}></div>
      <div className={classes.homeIndicator}>
        <div className={classes.homeIndicator2}></div>
      </div>
    </div>
  );
});
