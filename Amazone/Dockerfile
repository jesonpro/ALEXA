FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Tenuu122456/Hashzi-1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]