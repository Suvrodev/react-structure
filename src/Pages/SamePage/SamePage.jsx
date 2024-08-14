import React, { useRef } from "react";
import SamePageHeader from "./SamePageHeader/SamePageHeader";
import { Link } from "react-scroll";

const SamePage = () => {
  const text1 = `Dravid received his first call to the Indian national cricket team in October 1994 for the last two matches of the Wills World Series. However, he could not break into the playing eleven and had to return to the domestic circuit.[36] Despite a stellar show in domestic cricket, Dravid was not selected for the Indian team for the 1996 World Cup, prompting an Indian daily newspaper to run an article with the headline – "Rahul Dravid gets a raw deal".[37]

He eventually made his international debut on 3 April 1996 in an ODI against Sri Lanka in the Singer Cup held in Singapore immediately after the 1996 World Cup, replacing Vinod Kambli.[38][39] He wasn't particularly successful with the bat, scoring only three runs before being dismissed by Muttiah Muralitharan, but took two catches in the match.[40] He followed it up with another failure in the next game, scoring only four runs before being run out against Pakistan.[40]

In contrast to his ODI debut, his Test debut was rather successful. He was selected for the Indian squad touring England on the backdrop of a consistent performance in domestic cricket for five years.[36][41] Fine performances in the tour games including fifties against Gloucestershire and Leicestershire failed to earn him a place in the team for the First Test.[42] He finally made his Test debut at Lord's on 20 June 1996 against England in the Second Test of the series at the expense of injured senior batsman Sanjay Manjrekar.[38][43] Manjrekar, who was suffering from an ankle injury, was to undergo a fitness test on the morning of the Second Test. Dravid had already been informed that he would play if Manjrekar failed the test. Manjrekar subsequently failed the test. Ten minutes before the toss, Sandeep Patil, the Indian coach, informed Dravid that he was indeed going to make his debut that day. Patil recalled years later:[43]

I told him he will be playing. His face lit up. I cannot forget that moment.

Coming in to bat at no. 7, he forged important partnerships, first with another debutante Sourav Ganguly and then with Indian lower order, securing a vital first innings lead for his team.[44][45] Dravid scored 95 runs missing out on a debut hundred as he walked off after getting caught behind to a Chris Lewis delivery.[46] During this match, he also took his first catch in Test cricket to dismiss Nasser Hussain off the bowling of Srinath.[47][48] In the next tour game against British Universities, Dravid scored a hundred. He scored another fifty in the first innings of the Third Test.[40] Dravid concluded a successful debut series with an average of 62.33 from two Test matches.[49]Yuvraj Singh (born 12 December 1981) is a former Indian international cricketer who played in all formats of the game. He was an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox. He has won 7 Player of the Series awards in One Day International (ODI) cricket, which is a joint 3rd highest by an Indian cricketer, shared with former Indian captain Sourav Ganguly. He is the son of former Indian fast bowler and Punjabi actor Yograj Singh.[3]

Yuvraj was a member of the Indian cricket team in ODIs from 2000 to 2017 and played his first Test match in October 2003. He was the vice-captain of the Indian ODI team between 2007 and 2008. In a match against England at the 2007 World Twenty20, he famously hit six sixes in one over bowled by Stuart Broad[4]—a feat performed only three times previously in any form of senior cricket, and never in an international match between two teams with Test match status. In the same match, he set the record for the fastest fifty in Twenty20 Internationals and in all T20 cricket, reaching 50 runs in 12 balls, which was a record for fastest half century in International cricket, until it was broken by Dipendra Airee during 2023 Asian Games but Singh still holds the record in the ICC Cricket World Cup and among ICC full member nations. During the 2011 World Cup, he became the first player to take a 5-wicket haul and score a 50 in the same World Cup match. During the 2011 World Cup, Yuvraj Singh played eight innings in nine matches and scored 362 runs at a remarkable average of 90.50.[5] He also took 15 wickets in the tournament, maintaining an economy rate of 5.02.[6]

In 2011, Yuvraj was diagnosed with a cancerous tumor in his left lung and underwent chemotherapy treatment in Boston and Indianapolis.[7] In March 2012, he was discharged from the hospital after completing the third and final cycle of chemotherapy and returned to India in April. He made his international comeback in a Twenty20 match in September against New Zealand shortly before the 2012 World Twenty20.

In 2012, Yuvraj was conferred with the Arjuna Award, India's second highest sporting award by the Government of India. In 2014, he was awarded the Padma Shri, India's fourth highest civilian honour. At the 2014 IPL auction Royal Challengers Bangalore bought Yuvraj for an all-time high price of ₹14 crore and, in 2015, the Delhi Capitals bought him for ₹16 crore, making him the second most expensive player ever to be sold in the IPL until Chris Morris was sold to the Rajasthan Royals for a record ₹16.25 crore in February 2021. In February 2014, he was honoured with FICCI Most Inspiring Sportsperson of the Year Award.

On 10 June 2019, Yuvraj announced his retirement from all forms of International cricket.[8][9] He last represented India in June 2017, against the West Indies.[10] His request for a return to domestic cricket and IPL was turned down by BCCI over his participation in Global T20 League in Canada and T10 league.[11]"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation."`;

  const text2 = `Yuvraj Singh (born 12 December 1981) is a former Indian international cricketer who played in all formats of the game. He was an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox. He has won 7 Player of the Series awards in One Day International (ODI) cricket, which is a joint 3rd highest by an Indian cricketer, shared with former Indian captain Sourav Ganguly. He is the son of former Indian fast bowler and Punjabi actor Yograj Singh.[3]

Yuvraj was a member of the Indian cricket team in ODIs from 2000 to 2017 and played his first Test match in October 2003. He was the vice-captain of the Indian ODI team between 2007 and 2008. In a match against England at the 2007 World Twenty20, he famously hit six sixes in one over bowled by Stuart Broad[4]—a feat performed only three times previously in any form of senior cricket, and never in an international match between two teams with Test match status. In the same match, he set the record for the fastest fifty in Twenty20 Internationals and in all T20 cricket, reaching 50 runs in 12 balls, which was a record for fastest half century in International cricket, until it was broken by Dipendra Airee during 2023 Asian Games but Singh still holds the record in the ICC Cricket World Cup and among ICC full member nations. During the 2011 World Cup, he became the first player to take a 5-wicket haul and score a 50 in the same World Cup match. During the 2011 World Cup, Yuvraj Singh played eight innings in nine matches and scored 362 runs at a remarkable average of 90.50.[5] He also took 15 wickets in the tournament, maintaining an economy rate of 5.02.[6]

In 2011, Yuvraj was diagnosed with a cancerous tumor in his left lung and underwent chemotherapy treatment in Boston and Indianapolis.[7] In March 2012, he was discharged from the hospital after completing the third and final cycle of chemotherapy and returned to India in April. He made his international comeback in a Twenty20 match in September against New Zealand shortly before the 2012 World Twenty20.

In 2012, Yuvraj was conferred with the Arjuna Award, India's second highest sporting award by the Government of India. In 2014, he was awarded the Padma Shri, India's fourth highest civilian honour. At the 2014 IPL auction Royal Challengers Bangalore bought Yuvraj for an all-time high price of ₹14 crore and, in 2015, the Delhi Capitals bought him for ₹16 crore, making him the second most expensive player ever to be sold in the IPL until Chris Morris was sold to the Rajasthan Royals for a record ₹16.25 crore in February 2021. In February 2014, he was honoured with FICCI Most Inspiring Sportsperson of the Year Award.

On 10 June 2019, Yuvraj announced his retirement from all forms of International cricket.[8][9] He last represented India in June 2017, against the West Indies.[10] His request for a return to domestic cricket and IPL was turned down by BCCI over his participation in Global T20 League in Canada and T10 league.[11]`;

  const text3 = `In March 2020, when Zimbabwe toured Bangladesh, in the first ODI, Das scored 126 runs, his second century in ODI and became the first Bangladeshi batsman to score a century at Sylhet.[36][37] In the 3rd ODI, he scored his 1000th run in ODIs and then along with Tamim Iqbal made the highest partnership for Bangladesh for any wicket in ODIs (292 runs)[38] as well as scoring 176 runs off 143 balls. He made the highest individual score by any Bangladeshi batsman in ODIs.[39] Das scored 311 runs at an average of 103.68 in the ODI series and eventually become the "Player of the Tournament" jointly with Tamim Iqbal.[40]

In February 2021, when West Indies toured Bangladesh, he was one of the leading run-scorers and the highest run scorer for Bangladesh in the Test series, scoring 200 runs including two half-centuries.[41]

In June 2021, he was named in the Bangladesh's squad across all formats for their tour to Zimbabwe.[42] During the first innings of the one-off Test against Zimbabwe, he ended up five runs short of his maiden Test century,[43] He along with Mahmudullah, sustained a 138-runs partnership, which was the second highest seventh wicket partnership and the highest seventh wicket partnership for Bangladesh in Tests.[44]

In September 2021, he was named in Bangladesh's squad for the 2021 ICC Men's T20 World Cup.[45] In November 2021, in the first match against Pakistan, Das scored his first century in Test cricket.[46]

In January 2022, when Bangladesh toured New Zealand for a two match Test series, he played an important knock of 86 runs in registering Bangladesh's first ever win in New Zealand and first ever Test victory against New Zealand at Bay Oval. In the second test, he notched up 102 runs off 114 balls in their second innings, which was his first test century in away matches. However, Bangladesh lost the match by an innings and 117 runs. He was the highest run getter for Bangladesh in the series gathering 196 runs in 2 matches.[47]

As of January 2022, he attained his career best test ranking of no 12 as a Test batsman of the world in the ICC Men's Player Rankings which is the highest in the history of Bangladesh cricket.[48][49]

In February 2022, in a 3-match ODI series against Afghanistan, he scored 223 runs including a century and a half century and was adjusted Player of the series. He also played a crucial role in winning their first ever ODI series against South Africa, scoring 113 runs in the series, being the second highest run-getter, at an average of 37.67. Though he could not perform well in the 2-match test series scoring only 81 runs in 4 innings.

In May 2022, In the 2-match test series, against Sri Lanka, he scored 88, 141 and 52 in three innings which promoted him to the 12th position in the ICC Men's Test Batsmen ranking with 724 rating points, which is the highest points for any Bangladeshi batter in Test cricket.[50]`;
  const text4 = `Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer who plays Test and One Day International (ODI) cricket for the Indian national team. A former captain in all formats, Kohli retired from Twenty20 International (T20I) following India's win at the 2024 T20 World Cup. He is a right-handed batsman and an occasional unorthodox right arm quick bowler. He represents Royal Challengers Bengaluru in the Indian Premier League (IPL) and Delhi in domestic cricket. He holds the record as the highest run-scorer in IPL, ranks third in T20I, third in ODI, and stands as the fourth-highest in international cricket.[5] He also holds the record for scoring the most centuries in ODI cricket and stands second in the list of most international centuries scored. Kohli is widely regarded as one of the greatest batsmen of all time and the greatest batsman in the modern era.[citation needed] Kohli was a key member of the Indian team that won the 2011 Cricket World Cup, 2013 Champions Trophy and 2024 T20 World Cup and captained India to win the ICC Test mace three consecutive times in 2017, 2018, and 2019.[6]

In 2013, Kohli was ranked number one in the ICC rankings for ODI batsmen. In 2015, he achieved the summit of T20I rankings.[7] In 2018, he was ranked top Test batsman, making him the only Indian cricketer to hold the number one spot in all three formats of the game. He is the first player to score 20,000 runs in a decade. In 2020, the International Cricket Council named him the male cricketer of the decade.[8]

Kohli has garnered 10 ICC Awards which is more than any player in International Cricket, making him the most decorated player in International Cricket history. He won the ICC ODI Player of the Year award four times in 2012, 2017, 2018, and 2023. He also won the Sir Garfield Sobers Trophy, given to the ICC Cricketer of the Year, on two occasions, in 2017 and 2018 respectively. In 2018, he became the first player to win both ICC ODI and Test Player of the Year awards in the same year. Also, he was named the Wisden Leading Cricketer in the World for three consecutive years, from 2016 to 2018. Kohli has the second most and most 'Player of the Match' and 'Player of the Series' awards to his name, respectively, in all three formats combined. At the national level, Kohli was honoured with the Arjuna Award in 2013, the Padma Shri in 2017, and India's highest sporting honour, the Khel Ratna Award, in 2018. In 2018, Time magazine included him on its list of the 100 most influential people in the world.

After winning the 2024 T20 World Cup, Kohli announced his retirement from T20I.[9]`;
  const text5 = `Sachin Ramesh Tendulkar (/ˌsʌtʃɪn tɛnˈduːlkər/ ⓘ; pronounced [sətɕin teːɳɖulkəɾ]; born 24 April 1973) is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket.[5] Hailed as the world's most prolific batsman of all time, he is the all-time highest run-scorer in both ODI and Test cricket with more than 18,000 runs and 15,000 runs, respectively.[6] He also holds the record for receiving the most player of the match awards in international cricket.[7] Tendulkar was a Member of Parliament, Rajya Sabha by presidential nomination from 2012 to 2018.[8][9]

Tendulkar took up cricket at the age of eleven, made his Test match debut on 15 November 1989 against Pakistan in Karachi at the age of sixteen, and went on to represent Mumbai domestically and India internationally for over 24 years.[10] In 2002, halfway through his career, Wisden ranked him the second-greatest Test batsman of all time, behind Don Bradman, and the second-greatest ODI batsman of all time, behind Viv Richards.[11] The same year, Tendulkar was a part of the team that was one of the joint-winners of the 2002 ICC Champions Trophy. Later in his career, Tendulkar was part of the Indian team that won the 2011 Cricket World Cup, his first win in six World Cup appearances for India.[12] He had previously been named "Player of the Tournament" at the 2003 World Cup.

Tendulkar has received several awards from the government of India: the Arjuna Award (1994), the Khel Ratna Award (1997), the Padma Shri (1998), and the Padma Vibhushan (2008).[13][14] After Tendulkar played his last match in November 2013, the Prime Minister's Office announced the decision to award him the Bharat Ratna, India's highest civilian award.[15][16] He was the first sportsperson to receive the award and, as of 2023, is the youngest recipient.[17][18][19] In 2010, Time included Tendulkar in its annual list of the most influential people in the world.[20] Tendulkar was awarded the Sir Garfield Sobers Trophy for cricketer of the year at the 2010 International Cricket Council (ICC) Awards.[21]

Having retired from ODI cricket in 2012,[22][23] he retired from all forms of cricket in November 2013 after playing his 200th Test match.[24] Tendulkar played 664 international cricket matches in total, scoring 34,357 runs.[25] In 2013, Tendulkar was included in an all-time Test World XI to mark the 150th anniversary of Wisden Cricketers' Almanack, and he was the only specialist batsman of the post–World War II era, along with Viv Richards, to get featured in the team.[26] In 2019, he was inducted into the ICC Cricket Hall of Fame.[27] On 24 April 2023, the Sydney Cricket Ground unveiled a set of gates named after Tendulkar and Brian Lara on the occasion of Tendulkar's 50th birthday and the 30th anniversary of Lara's innings of 277 at the ground.[28][29][30]"

These excerpts should give you a sense of the narrative style and themes of each book.`;
  return (
    <div className="text-white">
      <div className="sticky top-0">
        <SamePageHeader />
      </div>

      <div className="flex flex-col gap-10">
        <div
          id="text1"
          className=" border border-gray-300 flex items-center justify-center p-5 rounded-md"
        >
          {text1}
        </div>
        <div
          id="text2"
          className=" border border-gray-300 flex items-center justify-center  p-5 rounded-md"
        >
          {text2}
        </div>
        <div
          id="text3"
          className=" border border-gray-300 flex items-center justify-center  p-5 rounded-md"
        >
          {text3}
        </div>
        <div
          id="text4"
          className=" border border-gray-300 flex items-center justify-center  p-5 rounded-md"
        >
          {text4}
        </div>
        <div
          id="text5"
          className=" border border-gray-300 flex items-center justify-center  p-5 rounded-md"
        >
          {text5}
        </div>
      </div>
    </div>
  );
};

export default SamePage;
