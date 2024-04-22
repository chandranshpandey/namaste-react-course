# iss basic react app ki docker file kaise banayenge ye seekho isse practice me cheezen aayengi
# nhi to hamesh video dekhte reh jaoge aur idea kuch bhi nhi lagega
# ki real world me cheezen kaise km krti hen
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 1234
CMD ["npm", "start"]
# RUN npm run build
# FROM nginx:stable-perl
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

# EXPOSE 80

